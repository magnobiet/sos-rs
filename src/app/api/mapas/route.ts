type Mapa = {
  name: string;
  description: string | null;
  link: string | null;
  iframeLink: string | null;
};

export type MunicipiosResponse = Array<Mapa>;

const mapas: MunicipiosResponse = [
  {
    name: 'Condições climaticas',
    description: null,
    link: 'https://www.windy.com/',
    iframeLink:
      'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=6&overlay=thunder&product=ecmwf&level=surface&lat=-29.363&lon=-50.361&message=true',
  },
  {
    name: 'Pontos de bloqueios em rodovias',
    description:
      'CRBM, DAER e PRF. Pontos de Bloqueios Totais e Parciais em rodovias Estaduais e Federais, atualizados em tempo real pelo Comando Rodoviário da Brigada Militar e Polícia Rodoviária Federal.',
    link: 'https://www.google.com/maps/d/viewer?mid=1ZlKA__gK8tH-WY6mbDeQzltsiwao7Q8&hl=pt-BR&usp=sharing',
    iframeLink:
      'https://www.google.com/maps/d/embed?mid=1ZlKA__gK8tH-WY6mbDeQzltsiwao7Q8&ehbc=2E312F',
  },
  {
    name: 'Áreas de risco',
    description: null,
    link: null,
    iframeLink:
      'https://coastal.climatecentral.org/embed/map/8/-51.3046/-30.063/?theme=water_level&map_type=water_level_above_mhhw&basemap=roadmap&contiguous=true&elevation_model=best_available&water_level=5.0&water_unit=m',
  },
  {
    name: 'ANA - Hidroweb',
    description:
      'Aplicação da Agência Nacional de Águas e Saneamento Básico para analise as estações hidrometeorológicas do Brasil e verifique, em tempo real os indicadores de nível, vazão e chuva.',
    link: 'https://www.snirh.gov.br/hidroweb-mobile/mapa',
    iframeLink: null,
  },
  {
    name: 'Flightradar24',
    description:
      'Monitore aeronaves sob sua região que podem ser usadas para resgate.',
    link: 'https://www.flightradar24.com/-29.50,-52.78/7',
    iframeLink: null,
  },
  {
    name: 'S2ID',
    description: 'Sistema Integrado de Informações sobre Desastres',
    link: 'https://s2id.mi.gov.br/paginas/index.xhtml',
    iframeLink: null,
  },
];

export function GET(): Response {
  return Response.json({
    data: mapas,
  });
}
