import Link from 'next/link';
import type { ReactElement } from 'react';
import { PageSection } from './page-section';

export function SectionMapas({
  className,
}: {
  className?: string;
}): ReactElement {
  return (
    <PageSection title="Mapas" className={className}>
      <div className="flex w-full flex-col gap-12">
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <div className="w-full rounded bg-slate-50 shadow lg:w-2/4">
            <h3 className="p-4 text-2xl">Condições climaticas</h3>

            <iframe
              title="Mapa com condições climaticas"
              className="h-96 w-full"
              src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=6&overlay=thunder&product=ecmwf&level=surface&lat=-29.363&lon=-50.361&message=true"
            />
          </div>

          <div className="w-full rounded bg-slate-50 shadow lg:w-2/4">
            <h3 className="p-4 text-2xl">Pontos de bloqueios em rodovias</h3>

            <iframe
              title="Mapa com pontos de bloqueios em rodovias"
              className="h-96 w-full"
              src="https://www.google.com/maps/d/embed?mid=1ZlKA__gK8tH-WY6mbDeQzltsiwao7Q8&ehbc=2E312F"
            />
          </div>

          <div className="w-full rounded bg-slate-50 shadow lg:w-2/4">
            <h3 className="p-4 text-2xl">Áreas de risco pelas águas</h3>

            <iframe
              title="Áreas de risco pelas águas"
              className="h-96 w-full"
              src="https://coastal.climatecentral.org/embed/map/8/-51.3046/-30.063/?theme=water_level&map_type=water_level_above_mhhw&basemap=roadmap&contiguous=true&elevation_model=best_available&water_level=5.0&water_unit=m"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center gap-2 md:w-2/4">
            <h3 className="text-center text-2xl">ANA - Hidroweb</h3>

            <p className="text-center">
              Aplicação da Agência Nacional de Águas e Saneamento Básico para
              analise as estações hidrometeorológicas do Brasil e verifique, em
              tempo real os indicadores de nível, vazão e chuva.
            </p>

            <Link
              className="rounded bg-rs-green px-4 py-2 font-bold text-white"
              href="https://www.snirh.gov.br/hidroweb-mobile/mapa"
              target="_blank"
            >
              Acessar o Hidroweb
            </Link>
          </div>

          <div className="flex w-full flex-col items-center gap-2 md:w-2/4">
            <h3 className="text-center text-2xl"> Flightradar24</h3>

            <p className="text-center">
              Monitore aeronaves sob sua região que podem ser usadas para
              resgate.
            </p>

            <Link
              className="rounded bg-rs-green px-4 py-2 font-bold text-white"
              href="https://www.flightradar24.com/-29.50,-52.78/7"
              target="_blank"
            >
              Acessar o Flightradar24
            </Link>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
