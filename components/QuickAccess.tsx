import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Dónde comer y tomar algo",
    description:
      "Restaurantes, taperías, cafeterías y terrazas donde disfrutar de la gastronomía de Maceda.",
    image: "/cards/comer.png",
    href: "/restaurantes",
    emoji: "🍽️",
    external: false,
  },
  {
    title: "Supermercados y panaderías",
    description:
      "Supermercados, panaderías y comercios para hacer la compra durante tu estancia.",
    image: "/cards/compras.png",
    href: "/compras",
    emoji: "🛒",
    external: false,
  },
  {
    title: "Servicios básicos",
    description:
      "Farmacias, centro de salud, taxis, cajeros y todos los servicios necesarios.",
    image: "/cards/servicios.png",
    href: "/servicios",
    emoji: "💊",
    external: false,
  },
  {
    title: "Descubre nuestro entorno",
    description:
      "Allariz, Ribeira Sacra, Ourense y algunos de los lugares más espectaculares de Galicia.",
    image: "/cards/entorno.png",
    href: "/entorno",
    emoji: "🌄",
    external: false,
  },
  {
    title: "Ideas de excursiones",
    description:
      "Rutas de medio día, un día o varios días para descubrir Galicia desde O Recuncho.",
    image: "/cards/excursiones.png",
    href: "/excursiones",
    emoji: "🚗",
    external: false,
  },
  {
  title: "Rutas de senderismo",
  description:
    "Paseos familiares y rutas de montaña para descubrir la naturaleza que rodea Maceda.",
  image: "/cards/senderismo.png",
  href: "/senderismo",
  emoji: "🥾",
  external: false,
},
 
];

export default function QuickAccess() {
  return (
    <section className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-4xl text-center">

          <h2 className="text-5xl font-bold text-green-900">
            Todo lo que necesitas durante tu estancia
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubre los mejores lugares para comer, hacer la compra,
            encontrar servicios esenciales y visitar algunos de los rincones
            más bonitos de Ourense y la Ribeira Sacra.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => {

            const Card = (
              <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="relative h-60">

                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute left-6 top-6 text-5xl">
                    {card.emoji}
                  </div>

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-green-900">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {card.description}
                  </p>

                  <div className="mt-8 inline-flex items-center rounded-full bg-green-800 px-6 py-3 font-semibold text-white transition group-hover:bg-green-900">
                    Explorar →
                  </div>

                </div>

              </div>
            );

            return card.external ? (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Card}
              </a>
            ) : (
              <Link key={card.title} href={card.href}>
                {Card}
              </Link>
            );

          })}

        </div>

      </div>
    </section>
  );
}