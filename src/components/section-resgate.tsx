import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const resgates = [
  {
    name: 'ResgateRS.app.br',
    link: 'https://resgaters.app.br/',
  },
  {
    name: 'ToSalvo.ong.br',
    link: 'https://tosalvo.ong.br/',
  },
  {
    name: 'Achados-E-Perdidos-RS.com.br',
    link: 'https://www.achados-e-perdidos-rs.com.br/',
  },
  {
    name: 'EstouSalvo-RS.com.br',
    link: 'https://estousalvo-rs.com.br/',
  },
  {
    name: 'PessoaPerdida.com.br',
    link: 'https://pessoaperdida.com.br/',
  },
  {
    name: 'AchamosSuaCrianca.com.br',
    link: 'https://achamossuacrianca.com.br/',
  },
  {
    name: 'BuscaResgatados.com',
    link: 'https://www.buscaresgatados.com/',
  },
];

export function SectionResgate({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Resgate" className={className}>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {resgates.map(({ name, link }) => {
          return (
            <div key={name} className="flex items-center justify-center p-4">
              <Link
                className="rounded bg-rs-green px-4 py-2 text-center font-bold text-white"
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
