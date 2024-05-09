import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const radios = [
  {
    name: 'Gaúcha',
    link: 'https://gauchazh.clicrbs.com.br/',
  },
  {
    name: 'Atlântida',
    link: 'https://www.gauchazh.com.br/atlantida/',
  },
];

const jornais = [
  {
    name: 'GZH',
    link: 'https://gauchazh.clicrbs.com.br/',
  },
  {
    name: 'Leouve',
    link: 'https://leouve.com.br/',
  },
  {
    name: 'Pioneiro',
    link: 'https://gauchazh.clicrbs.com.br/pioneiro/ultimas-noticias/',
  },
  {
    name: 'NH',
    link: 'https://digital.jornalnh.com.br/',
  },
  {
    name: 'Repercussão',
    link: 'https://www.jornalrepercussao.com.br/',
  },
];

export function SectionNoticias({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Notícias locais" className={className}>
      <div className="w-2/4">
        <h4 className="text-2xl">Rádios</h4>

        <ul>
          {radios.map(({ name, link }) => {
            return (
              <li key={link}>
                <Link className="hover:underline focus:underline" href={link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-2/4">
        <h4 className="text-2xl">Jornais</h4>

        <ul>
          {jornais.map(({ name, link }) => {
            return (
              <li key={link}>
                <Link className="hover:underline focus:underline" href={link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </PageSection>
  );
}
