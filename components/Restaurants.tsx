import Image from "next/image";

const restaurants = [
  {
    name: "Restaurante A Diligencia",
    type: "🍽 Restaurante tradicional",
    image: "/restaurants/diligencia.jpg",
    address: "Rúa Fonte dos Caños, 11 · Maceda",
    description:
      "Restaurante de cocina tradicional gallega con un ambiente familiar. Destaca por sus platos caseros elaborados con productos de temporada y es uno de los establecimientos gastronómicos de referencia en Maceda.",
    maps: "https://maps.google.com/?q=Restaurante+A+Diligencia+Maceda",
  },
  {
    name: "Porta Sacra",
    type: "🍕 Restaurante · Tapas · Terraza",
    image: "/restaurants/porta-sacra.jpg",
    address: "Av. Aureliano Ferreiro, 25 · Maceda",
    description:
      "Un establecimiento moderno y acogedor donde podrás desayunar, comer o cenar. Ofrece tapas, raciones, hamburguesas, bocadillos, pizzas y una agradable terraza.",
    maps: "https://maps.google.com/?q=Porta+Sacra+Maceda",
  },
  {
    name: "A Fenda Tapería",
    type: "🥘 Tapería",
    image: "/restaurants/fenda.jpg",
    address: "Rúa Aureliano Ferreiro, 3 · Maceda",
    description:
      "Local acogedor especializado en tapas y raciones con un ambiente agradable para disfrutar de una comida o cena informal.",
    maps: "https://maps.google.com/?q=A+Fenda+Maceda",
  },
  {
    name: "A Tapa",
    type: "🍽 Restaurante",
    image: "/restaurants/a-tapa.jpg",
    address: "Av. dos Milagros · Maceda",
    description:
      "Un clásico de Maceda para disfrutar de cocina tradicional gallega, tapas y raciones en un ambiente cercano.",
    maps: "https://maps.google.com/?q=A+Tapa+Maceda",
  },
  {
    name: "Teixeira",
    type: "🍴 Bar Restaurante",
    image: "/restaurants/teixeira.jpg",
    address: "Maceda",
    description:
      "Bar-restaurante conocido por su cocina casera, desayunos, tapas, raciones y platos tradicionales.",
    maps: "https://maps.google.com/?q=Teixeira+Maceda",
  },
  {
    name: "Mioco",
    type: "🍔 Restaurante informal",
    image: "/restaurants/mioco.jpg",
    address: "Praza das Toldas · Maceda",
    description:
      "Un establecimiento de estilo actual donde disfrutar de hamburguesas, bocadillos, raciones y cocina informal.",
    maps: "https://maps.google.com/?q=Mioco+Maceda",
  },
  {
    name: "Cervexería",
    type: "🍺 Cervecería · Bar · Terraza",
    image: "/restaurants/cervexeria.jpg",
    address: "Maceda",
    description:
      "Un lugar ideal para tomar una cerveza, un vino o un refresco acompañado de tapas y raciones. Dispone de terraza y es uno de los puntos de encuentro más populares del municipio.",
    maps: "https://maps.google.com/?q=Cervexeria+Maceda",
  },
  {
    name: "Kilómetro Cero",
    type: "☕ Cafetería",
    image: "/restaurants/kilometro-cero.jpg",
    address: "Rúa Aureliano Ferreiro · Maceda",
    description:
      "Cafetería ideal para desayunar, tomar un café o disfrutar de una cerveza acompañada de los pinchos que sirven con la consumición. Dispone de terraza y es uno de los establecimientos más frecuentados de Maceda.",
    maps: "https://maps.google.com/?q=Kilometro+Cero+Maceda",
  },
];

export default function Restaurants() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-green-900">
            Dónde comer y tomar algo
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
            Desde O Recuncho podrás descubrir la oferta gastronómica de
            Maceda, con restaurantes, taperías, cafeterías y terrazas donde
            disfrutar de la cocina gallega y del ambiente del municipio.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {restaurants.map((restaurant) => (

            <article
              key={restaurant.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Image
                src={restaurant.image}
                alt={restaurant.name}
                width={900}
                height={600}
                className="h-64 w-full object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {restaurant.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-green-700">
                  {restaurant.type}
                </p>

                <p className="mt-3 font-medium text-gray-700">
                  📍 {restaurant.address}
                </p>

                <p className="mt-5 leading-7 text-gray-600">
                  {restaurant.description}
                </p>

                <a
                  href={restaurant.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-green-800 px-6 py-3 text-white font-semibold transition hover:bg-green-900"
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