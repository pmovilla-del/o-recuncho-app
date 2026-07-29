import Image from "next/image";

const routes = [
  {
    name: "Paseo Fluvial de Maceda",
    difficulty: "🟢 Fácil",
    time: "1 hora",
    distance: "4 km",
    family: "Ideal con niños",
    image: "/places/paseo-fluvial.jpg",
    description:
      "Un agradable paseo junto al río entre vegetación y antiguos molinos. Perfecto para familias con niños pequeños o para disfrutar de una caminata tranquila.",
    maps: "https://maps.google.com/?q=Paseo+Fluvial+Maceda",
  },
  {
    name: "Serra de San Mamede",
    difficulty: "🔵 Media",
    time: "3-5 horas",
    distance: "8-14 km",
    family: "Para senderistas",
    image: "/places/san-mamede.jpg",
    description:
      "Una de las zonas naturales más impresionantes de Ourense, con bosques autóctonos, miradores y rutas de montaña.",
    maps: "https://maps.google.com/?q=Serra+de+San+Mamede",
  },
  {
    name: "Ruta fluvial de Baños de Molgas",
    difficulty: "🟢 Fácil",
    time: "2 horas",
    distance: "6 km",
    family: "Ideal con niños",
    image: "/places/banos-molgas.jpg",
    description:
      "Un recorrido muy agradable siguiendo el río Arnoia, perfecto para caminar en familia y disfrutar de un entorno tranquilo.",
    maps: "https://maps.google.com/?q=Baños+de+Molgas",
  },
  {
    name: "Santa Eufemia y molinos",
    difficulty: "🟡 Media",
    time: "4 horas",
    distance: "10 km",
    family: "Adultos y niños acostumbrados a caminar",
    image: "/places/santa-eufemia.jpg",
    description:
      "Ruta circular entre caminos tradicionales, molinos y pequeños saltos de agua en el entorno de Baños de Molgas.",
    maps: "https://maps.google.com/?q=Santa+Eufemia+Baños+de+Molgas",
  },
  {
    name: "San Pedro de Rocas",
    difficulty: "🟡 Media",
    time: "2-3 horas",
    distance: "7 km",
    family: "A partir de 8 años",
    image: "/places/san-pedro.jpg",
    description:
      "Combina naturaleza e historia visitando el monasterio excavado en la roca más antiguo de Galicia.",
    maps: "https://maps.google.com/?q=San+Pedro+de+Rocas",
  },
];

export default function Senderismo() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900">
            Rutas de senderismo
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Descubre paseos familiares, rutas de montaña y caminos rodeados de
            naturaleza a pocos minutos de O Recuncho.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {routes.map((route) => (

            <article
              key={route.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition"
            >

              <Image
                src={route.image}
                alt={route.name}
                width={900}
                height={600}
                className="h-64 w-full object-cover"
              />

              <div className="p-7">

                <h2 className="text-2xl font-bold">
                  {route.name}
                </h2>

                <div className="mt-4 space-y-2 text-gray-700">
                  <p>{route.difficulty}</p>
                  <p>⏱ {route.time}</p>
                  <p>📏 {route.distance}</p>
                  <p>👨‍👩‍👧 {route.family}</p>
                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  {route.description}
                </p>

                <a
                  href={route.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-green-800 px-6 py-3 text-white font-semibold hover:bg-green-900 transition"
                >
                  📍 Ver en Google Maps
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}