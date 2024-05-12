import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const ajudas = [
  {
    name: 'MeuLarDeVolta.com.br',
    description:
      'MeuLarDeVolta.com.br é uma plataforma para conectar pessoas que precisam ajuda ou querem ajudar na reconstrução.',
    link: 'https://www.meulardevolta.com.br/',
  },
  {
    name: 'AjudaRS.com.br',
    description:
      'Uma iniciativa de instituições religiosas, com o objetivo de divulgar de forma segura e rápida informações relevantes sobre as necessidades dos municípios.',
    link: 'https://ajudars.com.br/',
  },
];

export function SectionAjuda({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Ajuda" className={className}>
      {ajudas.map(({ name, description, link }) => {
        return (
          <div key={name} className="flex w-full flex-col items-center gap-4">
            <p className="text-center">{description}</p>

            <Link
              className="rounded bg-rs-green px-4 py-2 font-bold text-white"
              href={link}
              target="_blank"
            >
              Acessar {name}
            </Link>
          </div>
        );
      })}
    </PageSection>
  );
}
