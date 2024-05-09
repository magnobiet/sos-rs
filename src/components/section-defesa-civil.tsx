import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

export function SectionDefesaCivil({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection
      title="Alertas da Defesa Civil via SMS e/ou WhatsApp"
      className={className}
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="w-full md:w-2/4">
          <h3 className="text-bold text-center text-xl">SMS</h3>

          <ol>
            <li>
              Envie um SMS para o número{' '}
              <strong className="font-bold">40199</strong>
            </li>

            <li>
              Digite o CEP do seu endereço (Você pode cadastrar quantos CEPs
              você quiser)
            </li>
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

        <div className="mt-8 w-full md:mt-0 md:w-2/4">
          <h3 className="text-bold text-center text-xl">WhatsApp</h3>

          <ol>
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
              Após essa primeira interação,você poderá escolher o local de que
              deseja receber os alertas.
            </li>
          </ol>

          <p className="text-xs">
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
    </PageSection>
  );
}
