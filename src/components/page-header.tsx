import type { ReactElement } from 'react';

export function PageHeader(): ReactElement {
  return (
    <header>
      <div className="fixed top-0 flex h-1 w-full flex-row">
        <span className="bg-rs-green h-full w-1/3" />
        <span className="bg-rs-red h-full w-1/3" />
        <span className="bg-rs-yellow h-full w-1/3" />
      </div>

      <div className="container p-16">
        <h1 className="text-center text-6xl font-bold">
          SOS Rio Grande do Sul
        </h1>
      </div>
    </header>
  );
}
