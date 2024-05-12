import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

export function SectionDoacoes({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Doações" className={className}>
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-2/4">
            <Link href="https://www.vakinha.com.br/vaquinha/a-maior-campanha-solidaria-do-rs">
              <Image
                src="https://static.vakinha.com.br/uploads/vakinha/image/4712837/1714579840.27.png"
                width={800}
                height={450}
                alt="A maior campanha solidária do RS - Instituto Vakinha"
              />
            </Link>
          </div>

          <div className="w-full md:w-2/4">
            <Link href="https://sosenchentes.rs.gov.br/inicial">
              <Image
                src="https://educacao.rs.gov.br/upload/recortes/202405/07120707_323286_GDO.png"
                width={800}
                height={450}
                alt="PIX SOS Rio Grande do Sul - Governo do Estado do Rio Grande do Sul"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="mt-4 flex w-full flex-col items-center gap-4 py-4 text-center md:w-2/6">
            <div className="item-center flex h-16 justify-center">
              <Image
                src="https://www.correios.com.br/central-de-informacoes/newsletters/imagens/logo-correios.png/@@images/image.png"
                width={192}
                height={66}
                className="h-auto"
                alt="Logo dos Correios"
              />
            </div>

            <p>
              Os Correios estão enviando gratuitamente doações aos atingidos
              pela enchentes.
            </p>

            <p>
              Saiba como enviar sua doação{' '}
              <Link
                className="underline"
                href="https://blog.correios.com.br/2024/05/07/ampliamos-nossa-rede-de-apoio-as-vitimas-saiba-onde-e-o-que-doar-para-ajudar-2/"
                target="_blank"
              >
                aqui
              </Link>
              .
            </p>
          </div>

          <div className="mt-4 flex w-full flex-col items-center gap-4 py-4 text-center md:w-2/6">
            <div className="item-center flex h-16 justify-center">
              <Image
                src="https://sjdigital.vtexassets.com/assets/vtex/assets-builder/sjdigital.store-theme/23.0.40/img/logo-desk___01f338f875975833797adc12f35a72d2.png"
                width={192}
                height={53}
                className="h-auto"
                alt="Logo dos Correios"
              />
            </div>

            <p>
              Até 31 de maio de 2024 as farmácias São João oferecem
              gratuitamente medicamentos de uso contínuo da lista divulgada.
            </p>

            <p>
              Veja os medimentos e unidades participantes{' '}
              <Link
                className="underline"
                href="https://www.saojoaofarmacias.com.br/blog/lista-medicamentos-e-cidades-sao-joao-popular"
                target="_blank"
              >
                aqui
              </Link>
              .
            </p>
          </div>

          <div className="mt-4 flex w-full flex-col items-center gap-4 py-4 text-center md:w-2/6">
            <div className="item-center flex h-16 justify-center">
              <Image
                src="https://static.wixstatic.com/media/945063_d2d3c705efe741e98b1b42a4eb1dabc4~mv2.png"
                width={192}
                height={66}
                alt="Logo dos Correios"
                className="h-auto"
              />
            </div>

            <p>
              As lojas Quero-Quero estão recebendo doações de itens de primeira
              necessidade. Você também pode doar produtos a preços de custo, com
              condições facilitadas.
            </p>

            <p>
              Para mais informações acesso a página da empresa{' '}
              <Link
                className="underline"
                href="https://marketingqueroquero.wixsite.com/sos-enchentes"
                target="_blank"
              >
                aqui
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <p className="rounded bg-slate-200 p-4 text-center">
            Para saber de outras formas e locais de doações acesse o site{' '}
            <Link
              href="https://www.ondedoarrs.com.br/"
              className="rounded bg-rs-green px-2 font-bold text-white"
              target="_blank"
            >
              OndeDoarRS.com.br
            </Link>
            .
          </p>
        </div>
      </div>
    </PageSection>
  );
}
