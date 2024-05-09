import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

export function SectionAjuda({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Ajuda" className={className}>
      <div className="flex w-full flex-col items-center gap-4">
        <p className="text-center">
          MeuLarDeVolta.com.br é uma plataforma para conectar pessoas que
          precisam ajuda ou querem ajudar na reconstrução.
        </p>

        <Link
          className="bg-rs-green rounded px-4 py-2 font-bold text-white"
          href="https://www.meulardevolta.com.br/"
          target="_blank"
        >
          Acessar meulardevolta.com.br
        </Link>
      </div>
    </PageSection>
  );
}
