import Link from 'next/link';
import type { ReactElement } from 'react';

export function PageFooter(): ReactElement {
  return (
    <footer className="border-t py-2">
      <div className="container flex flex-col gap-2">
        <p className="text-center text-sm">
          Este é um projeto de código aberto, seu conteúdo esta disponível no{' '}
          <Link
            target="_blank"
            href="https://github.com/magnobiet/sos-rs"
            className="underline"
          >
            Github
          </Link>
          . Faça sua contribuição a este indice enviando e-mail para{' '}
          <Link
            className="underline"
            href="mailto:sosrs@magnobiet.com"
            target="_blank"
          >
            sosrs@magnobiet.com
          </Link>{' '}
          ou via <span className="italic">pull request</span> no{' '}
          <Link
            target="_blank"
            href="https://github.com/magnobiet/sos-rs"
            className="underline"
          >
            Github
          </Link>
          .
        </p>

        <p className="text-center text-sm">
          Parte dos dados aqui expostos estão disponíveis via API para uso em
          outras aplicações. Acesse a documentação no{' '}
          <Link
            href="https://documenter.getpostman.com/view/38670/2sA3JM8hWB"
            className="underline"
            target="_blank"
          >
            Postman
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
