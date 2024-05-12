import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

const pets = [
  {
    name: 'PetSOS.com.br',
    description:
      'Na plataforma PetSOS.com.br é possível cadastrar e buscar pets desabrigados.',
    link: 'https://www.petsos.com.br/',
  },
  {
    name: 'PetMapa.com.br',
    description:
      'Centralizando as informações de animais encontrados e perdidos para reunir famílias.',
    link: 'https://petmapa.com.br/',
  },
];

export function SectionPets({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Pets" className={className}>
      <div className="flex w-full flex-col gap-12 md:flex-row">
        {pets.map(({ name, description, link }) => {
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
