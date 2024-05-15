import type { GenericResponse } from '../../generic-response';

export type DefesaCivilResponse = Array<{
  id: string;
  title: string;
  number: string;
}>;

export function GET(): Response {
  const payload: GenericResponse<DefesaCivilResponse> = {
    meta: {
      source: 'https://defesacivil.rs.gov.br',
    },
    data: [
      {
        id: 'emergency',
        title: 'Telefone de emergência',
        number: '199',
      },
      {
        id: 'sms',
        title: 'Número de SMS para receber alertas',
        number: '40199',
      },
      {
        id: 'whatsapp',
        title: 'Número de WhatsApp para receber alertas',
        number: '(61) 2034-4611',
      },
    ],
  };

  return Response.json(payload);
}
