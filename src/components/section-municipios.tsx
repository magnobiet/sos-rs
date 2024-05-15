import clsx from 'clsx';
import Link from 'next/link';
import type { ReactElement } from 'react';
import type { GenericResponse } from '~/app/api/generic-response';
import type { Municipio } from '~/app/api/v2/municipios/route';
import { baseUrl } from '~/config';
import { PageSection } from './page-section';

async function getData(): Promise<GenericResponse<Array<Municipio>>> {
  const response = await fetch(`${baseUrl}/api/v2/municipios`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json() as Promise<GenericResponse<Array<Municipio>>>;
}

export async function SectionMunicipios({
  className,
}: {
  className?: string;
}): Promise<ReactElement> {
  const { data, meta } = await getData();

  return (
    <PageSection title="Municípios" className={className}>
      <div className="w-full text-center">
        <p>
          Município em estado de calamidade pública pelo decreto número{' '}
          <Link className="underline" href={String(meta.source)}>
            57.614
          </Link>
          , de 13 de maio de 2024.
        </p>

        <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {data
            .filter(({ stateOfPublicCalamity }) => stateOfPublicCalamity)
            .map(({ name, instagram }) => {
              return (
                <li
                  key={name}
                  className={clsx('rounded px-2 transition-colors', {
                    'bg-slate-300': instagram === null,
                    'focus:bg-slate-30 bg-slate-400 hover:bg-slate-300':
                      instagram !== null,
                  })}
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

        <p className="mt-16">
          Município em situação de emergência pelo decreto número{' '}
          <Link className="underline" href={String(meta.source)}>
            57.614
          </Link>
          , de 13 de maio de 2024.
        </p>

        <ul className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {data
            .filter(({ emergencySituation }) => emergencySituation)
            .map(({ name, instagram }) => {
              return (
                <li
                  key={name}
                  className={clsx('rounded px-2 transition-colors', {
                    'bg-slate-300': instagram === null,
                    'focus:bg-slate-30 bg-slate-400 hover:bg-slate-300':
                      instagram !== null,
                  })}
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
