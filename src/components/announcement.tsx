import Link from 'next/link';
import type { ReactElement } from 'react';

export function Announcement(): ReactElement {
  return (
    <section className="flex flex-col gap-8 bg-slate-50 px-4 py-2 text-center shadow">
      <p className="font-bold">
        Não caia em noticias falsas. Veja as checagens feitas pela{' '}
        <Link
          className="underline"
          href="https://lupa.uol.com.br/jornalismo/2024/05/06/doacoes-retidas-e-corpos-encontrados-veja-o-que-ja-checamos-sobre-as-enchentes-no-rs"
        >
          lupa.news
        </Link>
        .
      </p>
    </section>
  );
}
