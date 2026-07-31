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
    type: "🥘 Tapería, bar",
    image: "/restaurants/fenda.jpg",
    address: "Rúa Aureliano Ferreiro, 3 · Maceda",
    description:
      "Local acogedor especializado en tapas y pizzas con un ambiente agradable para disfrutar de una comida o cena informal.",
    maps: "https://maps.google.com/?q=A+Fenda+Maceda",
  },
  {
    name: "A Tapa",
    type: "🍽 Restaurante, bar, cafetería",
    image: "/restaurants/a-tapa.jpg",
    address: "Av. dos Milagros · Maceda",
    description:
      "Cuenta con una amplia carta de desayunos, bocadillos, hamburguesas especiales y una gran cantidad de tapas y raciones en un ambiente cercano.",
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
    type: "🍔 Restaurante informal, bar, cafetería",
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
      "Un lugar ideal para tomar una cerveza, un vino,  un refresco o unas copas. Dispone de terraza y es uno de los puntos de encuentro más populares del municipio.",
    maps: "https://maps.google.com/?q=Cervexeria+Maceda",
  },
  {
    name: "Kilómetro Cero",
    type: "☕ Cafetería, bar",
    image: "/restaurants/kilometro-cero.jpg",
    address: "Rúa Aureliano Ferreiro · Maceda",
    description:
      "Cafetería ideal para desayunar, tomar un café o disfrutar de una cerveza acompañada de los pinchos que sirven con la consumición. Dispone de terraza y es uno de los establecimientos más frecuentados de Maceda.",
    maps: "https://maps.google.com/?q=Kilometro+Cero+Maceda",
  },
  {
    name: "Café Bar Castillo",
    type: "☕ Cafetería · Bar · Restaurante",
    image: "/restaurants/castillo.jpg",
    address: "As Canteiras, 1 · Maceda",
    description:
      "Un establecimiento muy popular en Maceda donde disfrutar de desayunos, menú del día, tapas y cocina casera en un ambiente familiar. Dispone de terraza y es una excelente opción tanto para comer como para tomar algo.",
    maps: "https://maps.google.com/?q=Café+Bar+Castillo+Maceda",
  },
  {
    name: "Ondo Aspas",
    type: "☕ Bar · Cafetería",
    image: "/restaurants/ondo-aspas.jpg",
    address: "Maceda",
    description:
      "Para disfrutar de una café, una cerveza o lo que quieras, dispone de una agradable terraza.",
    maps: "https://maps.google.com/?q=Ondo+Aspas+Maceda",
  },
  {
    name: "Casa Rosa",
    type: "🍽 Restaurante, bar, cafetería",
    image: "/restaurants/casa-rosa.jpg",
    address: "Maceda",
    description:
      "Disfruta de sus pizzas, hamburguesas, y diversas raciones en un ambiente agradable.",
    maps: "https://maps.google.com/?q=Casa+Rosa+Maceda",
  },
  {
    name: "A Sala",
    type: "☕ Bar restaurante· Cafetería",
    image: "/restaurants/a-sala.jpg",
    address: "Maceda",
    description:
      "Ideal para desayunar, tomar un café, pizzas artesanas, tapas, platos combinados o una copa.",
    maps: "https://maps.google.com/?q=A+Sala+Maceda",
  },
  ];

export default function Restaurants() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-green-900">
            Dónde comer y tomar algo
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
            Desde O Recuncho podrás descubrir la oferta gastronómica de
            Maceda, con restaurantes, taperías, cafeterías y terrazas donde
            disfrutar de la cocina gallega y del ambiente del municipio.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {restaurants.map((restaurant) => (

            <article
              key={restaurant.name}
              className="group overflow-hidden rounded-[30px] bg-white ring-1 ring-stone-200/70 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Image
                sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                src={restaurant.image}
                alt={restaurant.name}
                width={900}
                height={600}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {restaurant.name}
                </h3>

                <p className="mt-3 inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
                  {restaurant.type}
                </p>

                <p className="mt-5 rounded-xl bg-stone-100 px-4 py-3 font-medium text-gray-700">
                  📍 {restaurant.address}
                </p>

                <p className="mt-5 leading-7 text-gray-600">
                  {restaurant.description}
                </p>

                <a
                  href={restaurant.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-full bg-green-800 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-green-900 hover:shadow-2xl"
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