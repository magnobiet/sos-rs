import type { ReactElement, ReactNode } from 'react';

type PageSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function PageSection({
  title,
  children,
}: PageSectionProps): ReactElement {
  return (
    <section className='even:bg-slate-500" flex flex-col gap-8 px-4 py-14 odd:bg-slate-100'>
      <h2 className="text-center text-3xl font-bold uppercase">{title}</h2>

      <div className="container flex flex-row gap-4">{children}</div>
    </section>
  );
}
