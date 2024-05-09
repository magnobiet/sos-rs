import type { ReactElement } from 'react';
import { SectionAbrigos } from '~/components/section-abrigos';
import { SectionAjuda } from '~/components/section-ajuda';
import { SectionDefesaCivil } from '~/components/section-defesa-civil';
import { SectionDoacoes } from '~/components/section-doacoes';
import { SectionLinksUteis } from '~/components/section-links-uteis';
import { SectionMapas } from '~/components/section-mapas';
import { SectionNoticias } from '~/components/section-noticias';
import { SectionPrefeituras } from '~/components/section-prefeituras';

export default function Home(): ReactElement {
  return (
    <div>
      <SectionDefesaCivil />

      <SectionDoacoes />

      <SectionAjuda />

      <SectionAbrigos />

      <SectionMapas />

      <SectionNoticias />

      <SectionPrefeituras />

      <SectionLinksUteis />
    </div>
  );
}
