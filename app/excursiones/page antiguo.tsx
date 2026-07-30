import Image from "next/image";

const plans = [
  {
    title: "Si solo tienes unas horas",
    icon: "⏳",
    image: "/places/maceda.jpg",
    text: "Una ruta tranquila para descubrir Maceda sin prisas.",
    activities: [
      "☕ Desayuna o toma un café en alguna cafetería de Maceda.",
      "🚶 Pasea por el casco histórico.",
      "🌳 Recorre el Paseo Fluvial.",
      "📷 Contempla el Castillo de Maceda desde el exterior.",
      "🍽️ Disfruta de la gastronomía local.",
    ],
    info: [
      "🚗 Desplazamientos: mínimos",
      "⏱️ Duración: 3-4 horas",
      "👨‍👩‍👧 Ideal para familias",
      "📅 Todo el año",
    ],
  },
  {
    title: "Un día completo",
    icon: "☀️",
    image: "/places/allariz.jpg",
    text: "Combina patrimonio, naturaleza y gastronomía.",
    activities: [
      "🏘️ Mañana en Maceda.",
      "🍽️ Comida en alguno de los restaurantes del municipio.",
      "🌺 Tarde en Allariz o Baños de Molgas.",
      "🌙 Regreso a O Recuncho.",
    ],
    info: [
      "🚗 40-60 km",
      "⏱️ Jornada completa",
      "👨‍👩‍👧 Para todos",
      "📅 Todo el año",
    ],
  },
  {
    title: "Escapada de fin de semana",
    icon: "🚗",
    image: "/places/ribeira-sacra.jpg",
    text: "El plan perfecto para conocer lo mejor de la provincia.",
    activities: [
      "🌄 Ribeira Sacra.",
      "⛪ San Pedro de Rocas.",
      "🚤 Catamarán por el Sil.",
      "🌉 Miradores.",
      "♨️ Termas de Ourense.",
      "🏘️ Allariz.",
    ],
    info: [
      "🚗 150 km aprox.",
      "⏱️ 2 días",
      "🍷 Ideal para parejas y amigos",
      "📅 Primavera, verano y otoño",
    ],
  },
  {
    title: "Tres o más días",
    icon: "🌿",
    image: "/places/san-pedro.jpg",
    text: "Descubre el interior de Galicia con calma.",
    activities: [
      "🥾 Serra de San Mamede.",
      "🌉 Pasarelas del Río Mao.",
      "⛪ Santa Cristina.",
      "🍷 Bodegas de la Ribeira Sacra.",
      "♨️ Termas de Ourense.",
      "🏘️ Allariz y Baños de Molgas.",
    ],
    info: [
      "🚗 Recorridos variados",
      "⏱️ 3-5 días",
      "🌄 Amantes de la naturaleza",
      "📅 Todo el año",
    ],
  },
];

export default function Excursiones() {
  return (
    <section className="bg-stone-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900">
            Excursiones desde O Recuncho
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Te proponemos diferentes planes según el tiempo del que dispongas
            para que aproveches al máximo tu estancia en Maceda y el interior
            de Galicia.
          </p>
        </div>

        <div className="space-y-12">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="overflow-hidden rounded-3xl bg-white shadow-xl lg:grid lg:grid-cols-2"
            >
              <div className="relative h-80">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-10">

                <div className="text-5xl">{plan.icon}</div>

                <h2 className="mt-4 text-3xl font-bold text-green-900">
                  {plan.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {plan.text}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl bg-green-50 p-5">
                  {plan.info.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-green-900 text-white p-10 text-center">
          <h2 className="text-3xl font-bold">
            💡 Consejo de O Recuncho
          </h2>

          <p className="mt-6 text-lg leading-8 max-w-4xl mx-auto">
            Si es tu primera visita, dedica un día a descubrir Maceda y Allariz,
            otro a la Ribeira Sacra y reserva unas horas para relajarte en las
            termas de Ourense. Es la mejor combinación para conocer la esencia
            del interior de Galicia.
          </p>
        </div>

      </div>
    </section>
  );
}