import Link from 'next/link';
import type { ReactElement } from 'react';

export function Announcement(): ReactElement {
  return (
    <section className="flex flex-col gap-8 bg-slate-50 px-4 py-2 text-center shadow">
      <p className="font-bold">
        Página em contante atualização. Contribua com as informações pelo e-mail{' '}
        <Link className="underline" href="mailto:sosrs@magnobiet.com">
          sosrs@magnobiet.com
        </Link>
        , ou diretamente no código que esta disponível no{' '}
        <Link href="https://github.com/magnobiet/sos-rs" className="underline">
          Github
        </Link>
        .
      </p>
    </section>
  );
}
