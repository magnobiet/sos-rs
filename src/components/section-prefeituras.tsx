import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const cidades = [
  {
    name: 'Arroio do Meio',
    link: 'https://www.instagram.com/prefeituradearroiodomeio',
  },
  {
    name: 'Arroio dos Ratos',
    link: 'https://www.instagram.com/prefeituraratos/',
  },
  {
    name: 'Bento Gonçalves',
    link: 'https://www.instagram.com/prefeiturabento/',
  },
  {
    name: 'Canoas',
    link: 'https://www.instagram.com/prefcanoas/',
  },
  {
    name: 'Eldorado do Sul',
    link: 'https://www.instagram.com/prefeldoradodosul/',
  },
  {
    name: 'Encantado',
    link: 'https://www.instagram.com/prefeituraencantado',
  },
  {
    name: 'Estrela',
    link: 'https://www.instagram.com/governodeestrelars/',
  },
  {
    name: 'Guaíba',
    link: 'https://www.instagram.com/prefeituradeguaiba/',
  },
  {
    name: 'Igrejinha',
    link: 'https://www.instagram.com/municipio_igrejinha/',
  },
  {
    name: 'Porto Alegre',
    link: 'https://www.instagram.com/prefpoa/',
  },
  {
    name: 'São Leopoldo',
    link: 'https://www.instagram.com/prefasaoleo/',
  },
  {
    name: 'Santa Maria',
    link: 'https://www.instagram.com/prefeituradesantamaria',
  },
  {
    name: 'São Sebastião do Caí',
    link: 'https://www.instagram.com/prefeiturasscai/',
  },
  {
    name: 'Roca Sales',
    link: 'https://www.instagram.com/prefeitura_rocasales/',
  },
  {
    name: 'Sinimbu',
    link: 'https://www.instagram.com/prefasinimbu/',
  },
  {
    name: 'Taquara',
    link: 'https://www.instagram.com/preftaquara/',
  },
  {
    name: 'Teutônia',
    link: 'https://www.instagram.com/prefeiturateutonia/',
  },
  {
    name: 'Três Coroas',
    link: 'https://www.instagram.com/prefeitura_trescoroas/',
  },
];

export function SectionPrefeituras({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Prefeituras" className={className}>
      <div className="w-full text-center">
        <h3>Perfil das prefeituras das cidades atingidas no Instagram.</h3>

        <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {cidades.map(({ name, link }) => {
            return (
              <li
                key={link}
                className="rounded bg-slate-400 px-2 transition-colors hover:bg-slate-300 focus:bg-slate-300"
              >
                <Link href={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </PageSection>
  );
}
