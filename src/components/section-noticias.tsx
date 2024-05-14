import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const radios = [
  {
    name: 'Gaúcha 93.7 FM',
    link: 'https://gauchazh.clicrbs.com.br/',
  },
  {
    name: 'Atlântida 94.3 FM',
    link: 'https://www.gauchazh.com.br/atlantida/',
  },
  {
    name: 'Bandeirantes 94.9 FM',
    link: 'https://www.band.uol.com.br/radios/radio-bandeirantes/porto-alegre',
  },
  {
    name: 'Mix 107.1 FM',
    link: 'http://www.mixfmpoa.com.br/',
  },
].sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

const jornais = [
  {
    name: 'Gaúcha ZH',
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
    name: 'Jornal NH',
    link: 'https://digital.jornalnh.com.br/',
  },
  {
    name: 'Repercussão',
    link: 'https://www.jornalrepercussao.com.br/',
  },
  {
    name: 'Serra Nossa',
    link: 'https://serranossa.com.br/',
  },
  {
    name: 'ABC+',
    link: 'https://www.abcmais.com/',
  },
  {
    name: 'Timoneiro',
    link: 'https://jornaltimoneiro.com.br/',
  },
].sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

export function SectionNoticias({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Notícias locais" className={className}>
      <div className="flex w-2/4 flex-col items-center justify-center">
        <h4 className="mb-2 text-2xl">Jornais</h4>

        <ul className="flex flex-wrap gap-4">
          {jornais.map(({ name, link }) => {
            return (
              <li key={link} className="rounded bg-slate-100 px-4">
                <Link className="hover:underline focus:underline" href={link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex w-2/4 flex-col items-center justify-center">
        <h4 className="mb-2 text-2xl">Rádios</h4>

        <ul className="flex flex-wrap gap-4">
          {radios.map(({ name, link }) => {
            return (
              <li key={link} className="rounded bg-slate-100 px-4">
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
