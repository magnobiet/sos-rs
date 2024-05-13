import clsx from 'clsx';
import Link from 'next/link';
import type { ReactElement } from 'react';
import type { MunicipiosResponse } from '~/app/api/municipios/route';
import { baseUrl } from '~/config';
import { PageSection } from './page-section';

async function getData(): Promise<MunicipiosResponse> {
  const response = await fetch(`${baseUrl}/api/municipios`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json() as Promise<MunicipiosResponse>;
}

export async function SectionMunicipios({
  className,
}: {
  className?: string;
}): Promise<ReactElement> {
  const { data: municipios } = await getData();

  return (
    <PageSection title="Municípios" className={className}>
      <div className="w-full text-center">
        <p>
          Município em estado de calamidade pública pelo decreto número{' '}
          <Link
            className="underline"
            href="https://www.diariooficial.rs.gov.br/materia?id=998883"
          >
            57.603
          </Link>
          , de 5 de maio de 2024.
        </p>

        <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {municipios.map(({ name, instagram }) => {
            return (
              <li
                key={name}
                className={clsx(
                  'rounded bg-slate-400 px-2 transition-colors hover:bg-slate-300 focus:bg-slate-300',
                  {
                    'bg-slate-300': instagram === null,
                    'bg-slate-400': instagram !== null,
                  },
                )}
              >
                {instagram !== null ? (
                  <Link target="_blank" href={instagram}>
                    {name}
                  </Link>
                ) : (
                  <>{name}</>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </PageSection>
  );
}
