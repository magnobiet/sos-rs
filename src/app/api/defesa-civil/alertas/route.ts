import { parse } from 'node-html-parser';
import type { GenericResponse } from '../../generic-response';

type AlertasDefesaCivilResponse = {
  recordcount: number;
  pagecount: number;
  page: string;
  startitem: number;
  enditem: number;
  body: string;
  pagination: string;
};

type ParsedItemResponse = {
  title: string;
  content: string;
  thumbnail: string;
  dateTime: string;
  link: string;
};

export type AlertasResponse = GenericResponse<Array<ParsedItemResponse>>;

const baseUrl = 'https://defesacivil.rs.gov.br';

function parseResponse(data: string): Array<ParsedItemResponse> {
  const alertas: Array<ParsedItemResponse> = [];
  const html = parse(data);

  html.querySelectorAll('.conteudo-lista__item').forEach((item) => {
    const alerta = {
      title:
        item
          .querySelector('.conteudo-lista__item__titulo')
          ?.textContent.trim() ?? '',

      content: item.querySelector('> p')?.textContent.trim() ?? '',

      thumbnail: `${baseUrl}${item.querySelector('.thumbnail')?.getAttribute('src')?.trim() ?? ''}`,

      dateTime:
        item
          .querySelector('.conteudo-lista__item__datahora')
          ?.getAttribute('datetime')
          ?.trim() ?? '',

      link: `${baseUrl}${
        item
          .querySelector('.conteudo-lista__item__titulo a')
          ?.getAttribute('href')
          ?.trim() ?? ''
      }`,
    };

    alertas.push(alerta);
  });

  return alertas;
}

export async function GET(): Promise<Response> {
  const response = await fetch(
    `${baseUrl}/_service/conteudo/pagedlistfilho?id=107&templatename=pagina.listanoticia.padrao&currentPage=1&pageSize=10&fields%5B%5D=Titulo&fields%5B%5D=TituloCurto&fields%5B%5D=Texto&form%5Bordem%5D=RECENTES`,
  );

  const { body } = (await response.json()) as AlertasDefesaCivilResponse;

  const payload: AlertasResponse = {
    meta: {
      source: 'https://defesacivil.rs.gov.br/avisos-e-alertas',
      lastUpdate: new Date(),
    },
    data: parseResponse(body),
  };

  return Response.json(payload);
}
