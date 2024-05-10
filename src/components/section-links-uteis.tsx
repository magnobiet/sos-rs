import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const links = [
  {
    name: 'Defesa Civil do Rio Grande do Sul',
    link: 'https://defesacivil.rs.gov.br/',
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
              <Link className="underline" href={link}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
}
