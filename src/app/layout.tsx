import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactElement } from 'react';
import { PageFooter } from '~/components/page-footer';
import { PageHeader } from '~/components/page-header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SOS Rio Grande do Sul',
  description:
    'Portal com informações verificadas para ajudar na reconstrução do Rio Grande do Sul',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>): ReactElement {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="https://www.rs.gov.br/themes/portalrs/ico/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        {/* <Announcement /> */}

        <PageHeader />

        <main>{children}</main>

        <PageFooter />
      </body>
    </html>
  );
}
