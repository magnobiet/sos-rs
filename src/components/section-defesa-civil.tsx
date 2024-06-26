import Link from 'next/link';
import type { ReactElement } from 'react';
import type { AlertasResponse } from '~/app/api/v1/defesa-civil/alertas/route';
import { baseUrl } from '~/config';
import { formatDate } from '~/lib/utils';
import { PageSection } from './page-section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

async function getData(): Promise<AlertasResponse> {
  const response = await fetch(`${baseUrl}/api/v1/defesa-civil/alertas`, {
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json() as Promise<AlertasResponse>;
}

export async function SectionDefesaCivil({
  className,
}: {
  className?: string;
}): Promise<ReactElement> {
  const { data: alertas } = await getData();

  return (
    <PageSection
      title="Alertas da Defesa Civil via SMS e/ou WhatsApp"
      className={className}
    >
      <div className="w-full">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-2 md:w-2/4">
            <h3 className="text-bold text-center text-xl">SMS</h3>

            <ol className="list-inside list-decimal">
              <li>
                Envie um SMS para o número{' '}
                <strong className="font-bold">40199</strong>
              </li>

              <li>Digite o CEP do seu endereço</li>
            </ol>

            <p className="text-xs">
              Fonte:
              <Link
                className="pl-1 hover:underline focus:underline"
                href="https://defesacivil.rs.gov.br/como-receber-os"
                target="_blank"
              >
                Defesa Civil
              </Link>
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 md:w-2/4">
            <h3 className="text-bold text-center text-xl">WhatsApp</h3>

            <ol className="list-inside list-decimal">
              <li>
                Envie uma mensagem para o número{' '}
                <Link
                  className="hover:underline focus:underline"
                  href="https://wa.me/556120344611"
                  target="_blank"
                >
                  <strong className="font-bold">(61) 2034-4611</strong>
                </Link>
              </li>

              <li>
                Você poderá escolher o local de que deseja receber os alertas
              </li>
            </ol>

            <p className="mt-2 text-xs">
              Fonte:
              <Link
                className="pl-1 hover:underline focus:underline"
                href="https://www.defesacivil.rs.gov.br/brasil-e-o-primeiro-pais-do-mundo-a-enviar-alertas-de-desastres-da-defesa-civil-pelo-whatsapp"
                target="_blank"
              >
                Defesa Civil
              </Link>
            </p>
          </div>
        </div>

        <section className="mt-12 rounded bg-rs-yellow/20 p-4 shadow">
          <Carousel className="w-full max-w-fit">
            <CarouselContent>
              {alertas.map(({ title, content, dateTime, link }) => {
                if (title && content) {
                  return (
                    <CarouselItem key={dateTime}>
                      <div className="flex flex-col items-start gap-4">
                        <h3 className="font-bold">{title}</h3>

                        <time dateTime={dateTime}>
                          {formatDate(new Date(dateTime))}
                        </time>

                        <p className="line-clamp-2">{content}</p>

                        <a
                          className="rounded bg-rs-red/75 px-4 py-2 font-bold text-white"
                          href={link}
                          target="_blank"
                          rel="noopener"
                        >
                          Ver alerta completo
                        </a>
                      </div>
                    </CarouselItem>
                  );
                }
              })}
            </CarouselContent>

            <CarouselPrevious className="-ms-4" />

            <CarouselNext className="-me-4" />
          </Carousel>
        </section>
      </div>
    </PageSection>
  );
}
