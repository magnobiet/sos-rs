import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const abrigos = [
  {
    name: 'SOS-RS.com',
    description:
      'Para quem está precisando cadastrar abrigo ou doações, o SOS-RS é um portal, você pode registrar informações sobre abrigos disponíveis ou doações que deseja oferecer.',
    link: 'https://sos-rs.com/',
  },
  {
    name: 'AbrigaRS.com.br',
    description: 'Mapeamento de abrigos e suas necessidades.',
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
