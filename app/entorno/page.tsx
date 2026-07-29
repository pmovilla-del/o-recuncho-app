import Link from "next/link";

const patrimonio = [
  {
    image: "/places/san-pedro.jpg",
    title: "Monasterio de San Pedro de Rocas",
    distance: "30 min",
    text: "El monasterio excavado en roca más antiguo de Galicia, un lugar imprescindible para descubrir los orígenes del monacato gallego.",
    maps: "https://maps.google.com/?q=San+Pedro+de+Rocas",
  },
  {
    image: "/places/santa-cristina.jpg",
    title: "Monasterio de Santa Cristina de Ribas de Sil",
    distance: "55 min",
    text: "Una joya del románico rodeada por los bosques de la Ribeira Sacra.",
    maps: "https://maps.google.com/?q=Monasterio+Santa+Cristina+de+Ribas+de+Sil",
  },
  {
    image: "/places/santo-estevo.jpg",
    title: "Monasterio de Santo Estevo",
    distance: "45 min",
    text: "Impresionante monasterio convertido en Parador Nacional, famoso por sus tres claustros.",
    maps: "https://maps.google.com/?q=Parador+Santo+Estevo",
  },
  {
    image: "/places/montederramo.jpg",
    title: "Monasterio de Montederramo",
    distance: "40 min",
    text: "Uno de los conjuntos monásticos más monumentales de Galicia.",
    maps: "https://maps.google.com/?q=Monasterio+de+Montederramo",
  },
  {
    image: "/places/oseira.jpg",
    title: "Monasterio de Oseira",
    distance: "50 min",
    text: "Conocido como el Escorial gallego por sus impresionantes dimensiones.",
    maps: "https://maps.google.com/?q=Monasterio+de+Oseira",
  },
  {
    image: "/places/celanova.jpg",
    title: "Monasterio de Celanova",
    distance: "45 min",
    text: "Fundado por San Rosendo, es uno de los monasterios históricos más importantes de Galicia.",
    maps: "https://maps.google.com/?q=Monasterio+de+Celanova",
  },
  {
    image: "/places/xunqueira.jpg",
    title: "Xunqueira de Espadañedo",
    distance: "25 min",
    text: "Pequeño monasterio medieval situado en un entorno muy tranquilo.",
    maps: "https://maps.google.com/?q=Xunqueira+de+Espadañedo",
  },
  {
    image: "/places/milagros.jpg",
    title: "Santuario dos Milagros",
    distance: "15 min",
    text: "Uno de los principales centros de peregrinación de Galicia.",
    maps: "https://maps.google.com/?q=Santuario+dos+Milagros",
  },
  {
    image: "/places/maceda-castillo.jpg",
    title: "Castillo de Maceda",
    distance: "5 min",
    text: "Símbolo de la villa de Maceda y uno de sus edificios históricos más representativos.",
    maps: "https://maps.google.com/?q=Castillo+de+Maceda",
  },
];

export default function EntornoPage() {
  return (
    <main>

      <section className="bg-green-900 py-20 text-white">

        <div className="mx-auto max-w-6xl px-6">

          <h1 className="text-5xl font-bold">
            Descubre nuestro entorno
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-green-100">
            Desde O Recuncho podrás descubrir algunos de los lugares más
            espectaculares del interior de Galicia: monasterios, pueblos,
            naturaleza, miradores y paisajes únicos.
          </p>

          <Link
            href="/"
            className="mt-10 inline-block rounded-full bg-white px-6 py-3 font-semibold text-green-900 hover:bg-stone-100 transition"
          >
            ← Volver al inicio
          </Link>

        </div>

      </section>

      <section className="py-20 bg-stone-100">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-center text-4xl font-bold text-green-900">
            🏛️ Monasterios y patrimonio
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {patrimonio.map((place) => (
              <Place key={place.title} {...place} />
            ))}

          </div>
                    <h2 className="mt-24 mb-10 text-center text-4xl font-bold text-green-900">
            🌿 Naturaleza
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <Place
              image="/places/rio-mao.jpg"
              title="Pasarelas del Río Mao"
              distance="45 min"
              text="Una espectacular ruta de pasarelas de madera entre bosques y cañones en plena Ribeira Sacra."
              maps="https://maps.google.com/?q=Pasarelas+Rio+Mao"
            />

            <Place
              image="/places/melon.jpg"
              title="Pozas de Melón"
              distance="55 min"
              text="Piscinas naturales de aguas cristalinas ideales para disfrutar durante los meses de verano."
              maps="https://maps.google.com/?q=Pozas+de+Melon"
            />

            <Place
              image="/places/san-mamede.jpg"
              title="Serra de San Mamede"
              distance="20 min"
              text="Montañas, bosques y algunas de las mejores rutas de senderismo de la provincia."
              maps="https://maps.google.com/?q=Serra+de+San+Mamede"
            />

            <Place
              image="/places/canon-sil.jpg"
              title="Cañón del Sil"
              distance="50 min"
              text="Uno de los paisajes más espectaculares de Galicia, con miradores y viñedos en bancales."
              maps="https://maps.google.com/?q=Canon+del+Sil"
            />

            <Place
              image="/places/maceda-rio.jpg"
              title="Paseo Fluvial de Maceda"
              distance="5 min"
              text="Un agradable paseo junto al río, perfecto para caminar, correr o disfrutar con niños."
              maps="https://maps.google.com/?q=Paseo+Fluvial+Maceda"
            />

            <Place
              image="/places/ribeira-sacra.jpg"
              title="Ribeira Sacra"
              distance="45 min"
              text="Una combinación única de naturaleza, monasterios, miradores, bodegas y rutas fluviales."
              maps="https://maps.google.com/?q=Ribeira+Sacra"
            />

          </div>

          <h2 className="mt-24 mb-10 text-center text-4xl font-bold text-green-900">
            🌄 Miradores
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <Place
              image="/places/balcones.jpg"
              title="Balcones de Madrid"
              distance="55 min"
              text="El mirador más famoso de la Ribeira Sacra, con vistas impresionantes sobre el río Sil."
              maps="https://maps.google.com/?q=Balcones+de+Madrid+Parada+de+Sil"
            />

            <Place
              image="/places/cabezoas.jpg"
              title="Mirador de Cabezoás"
              distance="55 min"
              text="Un balcón natural para contemplar el Cañón del Sil y los viñedos."
              maps="https://maps.google.com/?q=Mirador+Cabezoas"
            />

            <Place
              image="/places/vilouxe.jpg"
              title="Mirador de Vilouxe"
              distance="55 min"
              text="Un rincón privilegiado para contemplar uno de los mejores paisajes de Galicia."
              maps="https://maps.google.com/?q=Mirador+Vilouxe"
            />

            <Place
              image="/places/cividade.jpg"
              title="Mirador de A Cividade"
              distance="60 min"
              text="Un mirador tranquilo y poco conocido con vistas espectaculares."
              maps="https://maps.google.com/?q=Mirador+A+Cividade"
            />

            <Place
              image="/places/pena-castelo.jpg"
              title="Pena do Castelo"
              distance="25 min"
              text="Excelente panorámica sobre la Serra de San Mamede y los alrededores de Maceda."
              maps="https://maps.google.com/?q=Pena+do+Castelo"
            />

          </div>

          <h2 className="mt-24 mb-10 text-center text-4xl font-bold text-green-900">
            🏘️ Pueblos con encanto
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <Place
              image="/places/allariz.jpg"
              title="Allariz"
              distance="25 min"
              text="Casco histórico, paseo fluvial, tiendas y una excelente oferta gastronómica."
              maps="https://maps.google.com/?q=Allariz"
            />

            <Place
              image="/places/ourense.jpg"
              title="Ourense"
              distance="20 min"
              text="Ciudad termal con As Burgas, la Catedral, el Puente Romano y un animado casco histórico."
              maps="https://maps.google.com/?q=Ourense"
            />

            <Place
              image="/places/banos-molgas.jpg"
              title="Baños de Molgas"
              distance="15 min"
              text="Balneario histórico, puente romano y agradables paseos junto al río Arnoia."
              maps="https://maps.google.com/?q=Baños+de+Molgas"
            />

            <Place
              image="/places/ribadavia.jpg"
              title="Ribadavia"
              distance="45 min"
              text="Capital histórica del Ribeiro, con un precioso barrio judío y un castillo medieval."
              maps="https://maps.google.com/?q=Ribadavia"
            />

            <Place
              image="/places/castro-caldelas.jpg"
              title="Castro Caldelas"
              distance="50 min"
              text="Villa medieval con castillo, calles empedradas y magníficas vistas."
              maps="https://maps.google.com/?q=Castro+Caldelas"
            />

          </div>
                  </div>

      </section>

    </main>
  );
}

type PlaceProps = {
  image: string;
  title: string;
  distance: string;
  text: string;
  maps: string;
};

function Place({
  image,
  title,
  distance,
  text,
  maps,
}: PlaceProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-7">

        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 font-semibold text-green-700">
          📍 {distance}
        </p>

        <p className="mt-5 leading-7 text-gray-600">
          {text}
        </p>

        <a
          href={maps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
        >
          📍 Ver en Google Maps
        </a>

      </div>

    </article>
  );
}