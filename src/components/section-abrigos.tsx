import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const abrigos = [
  {
    name: 'SOS-RS.com',
    description:
      'A plataforma SOS-RS.com lista os abrigos disponíveis no estado, assim como seu status de lotação e necessidades. Mais de 400 abrigos cadastrados.',
    link: 'https://sos-rs.com/',
  },
  {
    name: 'AbrigaRS.com.br',
    description: '  Mapeamento de abrigos e suas necessidades.',
    link: 'https://abrigars.com.br/',
  },
];

export function SectionAbrigos({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Abrigos" className={className}>
      <div className="flex w-full flex-col gap-12 md:flex-row">
        {abrigos.map(({ name, description, link }) => {
          return (
            <div
              key={name}
              className="flex w-full flex-col items-center gap-4 md:w-2/4"
            >
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
      </div>
    </PageSection>
  );
}
