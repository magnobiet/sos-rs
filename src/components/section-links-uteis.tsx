import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const links = [
  {
    name: 'Defesa Civil do Rio Grande do Sul',
    link: 'https://defesacivil.rs.gov.br/',
  },
  {
    name: 'MetSul Metereologia',
    link: 'https://metsul.com/',
  },
  {
    name: 'Portal do Estado do Rio Grande do Sul',
    link: 'https://www.estado.rs.gov.br/',
  },
  {
    name: 'Portal SOS Enchentes do Estado do Rio Grande do Sul',
    link: 'https://sosenchentes.rs.gov.br/',
  },
  {
    name: 'Boletins sobre o impacto das chuvas no RS',
    link: 'https://estado.rs.gov.br/boletins-sobre-o-impacto-das-chuvas-no-rs',
  },
  {
    name: 'Dados Hidrológicos DRHS/SEMA',
    link: 'https://linktr.ee/niveisguaiba2024',
  },
  {
    name: 'Perfil do aeroporto de Porto Alegre no Instagram',
    link: 'https://www.instagram.com/portoalegreairportoficial/',
  },
];

export function SectionLinksUteis({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Links úteis" className={className}>
      <ul className="w-full text-center">
        {links.map(({ name, link }) => {
          return (
            <li key={link}>
              <Link className="underline" href={link} target="_blank">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
}
