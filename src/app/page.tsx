import type { ReactElement } from 'react';
import { SectionAbrigos } from '~/components/section-abrigos';
import { SectionAjuda } from '~/components/section-ajuda';
import { SectionDefesaCivil } from '~/components/section-defesa-civil';
import { SectionDoacoes } from '~/components/section-doacoes';
import { SectionLinksUteis } from '~/components/section-links-uteis';
import { SectionMapas } from '~/components/section-mapas';
import { SectionMunicipios } from '~/components/section-municipios';
import { SectionNoticias } from '~/components/section-noticias';
import { SectionPets } from '~/components/section-pets';
import { SectionResgate } from '~/components/section-resgate';

export default function Home(): ReactElement {
  return (
    <div>
      <SectionDefesaCivil />

      <SectionDoacoes />

      <SectionResgate />

      <SectionAjuda />

      <SectionAbrigos />

      <SectionPets />

      <SectionMapas />

      <SectionNoticias />

      <SectionMunicipios />

      <SectionLinksUteis />
    </div>
  );
}
