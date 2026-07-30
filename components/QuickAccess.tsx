import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Dónde comer y tomar algo",
    description:
      "Restaurantes, taperías, cafeterías y terrazas donde disfrutar de la gastronomía de Maceda.",
    image: "/cards/comer.png",
    href: "/restaurantes",
    external: false,
  },
  {
    title: "Supermercados y panaderías",
    description:
      "Supermercados, panaderías y comercios para hacer la compra durante tu estancia.",
    image: "/cards/compras.png",
    href: "/compras",
    external: false,
  },
  {
    title: "Servicios básicos",
    description:
      "Farmacias, centro de salud, taxis, cajeros y todos los servicios necesarios.",
    image: "/cards/servicios.png",
    href: "/servicios",
    external: false,
  },
  {
    title: "Descubre nuestro entorno",
    description:
      "Allariz, Ribeira Sacra, Ourense y algunos de los lugares más espectaculares de Galicia.",
    image: "/cards/entorno.png",
    href: "/entorno",
    external: false,
  },
  {
    title: "Ideas de excursiones",
    description:
      "Rutas de medio día, un día o varios días para descubrir Galicia desde O Recuncho.",
    image: "/cards/excursiones.png",
    href: "/excursiones",
    external: false,
  },
  {
    title: "Rutas de senderismo",
    description:
      "Paseos familiares y rutas de montaña para descubrir la naturaleza que rodea Maceda.",
    image: "/cards/senderismo.png",
    href: "/senderismo",
    external: false,
  },
  {
    title: "Nuestras tradiciones",
    description:
      "Fiestas, ferias y costumbres que mantienen viva la esencia de Maceda.",
    image: "/cards/tradiciones.png",
    href: "/tradiciones",
    external: false,
  },
];

export default function QuickAccess() {
  return (
    <section className="fade-up bg-stone-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-14 max-w-4xl text-center">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900">
            Todo lo que necesitas durante tu estancia
          </h2>

          <p className="mt-5 text-xl leading-9 text-gray-600">
            Descubre los mejores lugares para comer, hacer la compra,
            encontrar servicios esenciales y visitar algunos de los rincones
            más bonitos de Ourense y la Ribeira Sacra.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => {

            const Card = (
  <div className="group overflow-hidden rounded-[30px] bg-white ring-1 ring-stone-200/60 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl fade-up">

                <div className="relative h-60 overflow-hidden">

<Image
  src={card.image}
  alt={card.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
  className="object-cover transition-all duration-700 group-hover:scale-105"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute left-6 top-6 text-4xl drop-shadow-lg">
                    {card.emoji}
                  </div>

                </div>

                <div className="p-9">

                  <div className="mb-4 h-1 w-14 rounded-full bg-green-700" />

                  <h3 className="text-3xl font-bold tracking-tight text-green-900">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-[17px] leading-8 text-gray-600">
                    {card.description}
                  </p>

                  <div className="mt-8 inline-flex items-center rounded-full bg-green-800 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-500 group-hover:translate-x-1 group-hover:bg-green-900">
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