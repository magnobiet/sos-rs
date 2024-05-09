import Link from 'next/link';
import type { ReactElement } from 'react';

export function PageFooter(): ReactElement {
  return (
    <footer className="border-t py-2 ">
      <div className="container">
        <p className="text-center text-sm">
          Este é um projeto de código aberto, seu conteúdo esta disponível no{' '}
          <Link
            href="https://github.com/magnobiet/sos-rs"
            className="underline"
          >
            Github
          </Link>
          . Faça sua contribuição a este indice enviando e-mail para{' '}
          <Link className="underline" href="mailto:sosrs@magnobiet.com">
            sosrs@magnobiet.com
          </Link>{' '}
          ou via <span className="italic">pull request</span> no{' '}
          <Link
            href="https://github.com/magnobiet/sos-rs"
            className="underline"
          >
            Github
          </Link>
          .
        </p>

        <p className="text-center text-sm">
          Feito com ❤️ no <abbr title="Rio Grande do Sul">RS</abbr> para o{' '}
          <abbr title="Rio Grande do Sul">RS</abbr>.
        </p>
      </div>
    </footer>
  );
}
