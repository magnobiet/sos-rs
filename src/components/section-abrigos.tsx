import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

export function SectionAbrigos({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Abrigos" className={className}>
      <div className="flex w-full flex-col gap-12 md:flex-row">
        <div className="flex w-full flex-col items-center gap-4 md:w-2/4">
          <p className="text-center">
            A plataforma SOS-RS.com lista os abrigos disponiveis no estado,
            assim como seu status de lotação e necessidades.
          </p>

          <Link
            className="bg-rs-green rounded px-4 py-2 font-bold text-white"
            href="https://sos-rs.com/"
            target="_blank"
          >
            Acessar SOS-RS.com
          </Link>
        </div>

        <div className="flex w-full flex-col items-center gap-4 md:w-2/4">
          <p className="text-center">
            Na plataforma PetSOS.com.br é possível cadastrar e buscar pets
            desabrigados.
          </p>

          <Link
            className="bg-rs-green rounded px-4 py-2 font-bold text-white"
            href="https://www.petsos.com.br/"
            target="_blank"
          >
            Acessar PetSOS.com.br
          </Link>
        </div>
      </div>
    </PageSection>
  );
}
