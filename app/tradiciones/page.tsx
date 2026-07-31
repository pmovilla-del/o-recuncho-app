import Image from "next/image";
import Link from "next/link";

const traditions = [
  {
    title: "Entroido de Maceda",
    image: "/tradiciones/felos.png",
    emoji: "🎭",
    description:
      "El Entroido de Maceda es uno de los carnavales tradicionales de Galicia. Sus protagonistas son los Felos, personajes con máscaras de madera talladas a mano, trajes tradicionales y grandes chocas que recorren las calles anunciando la llegada del carnaval.",
    text:
      "El Entroido de Maceda conserva una tradición centenaria que atrae cada año a más visitantes. Vivirlo en primera persona es una experiencia única para conocer la cultura popular gallega.",
  },
  {
    title: "A Baixada da Marela",
    image: "/tradiciones/marela.png",
    emoji: "🐂",
    description:
      "Una de las celebraciones más singulares del municipio, donde tradición y participación popular convierten las calles de Maceda en una gran fiesta.",
    text:
      "La Marela, figura simbólica, es la protagonista de un ritual festivo del entroido de Maceda. Si lo has vivido una vez es probable que repitas",
  },
  {
    title: "As Feiras de Maceda",
    image: "/tradiciones/feira.png",
    emoji: "🛍️",
    description:
      "Las ferias tradicionales siguen siendo uno de los principales puntos de encuentro de la comarca.",
    text:
      "En ellas podrás encontrar productos locales, artesanía, alimentación, comercio tradicional y disfrutar del ambiente auténtico de un pueblo gallego que mantiene vivas sus costumbres. Se celebran los días 4 y 20 de cada mes (Si el 20 cae en Domingo, se pasa al sábado 19)",
  },
  {
    title: "Entroido Quente",
    image: "/tradiciones/entroido-quente.png",
    emoji: "🎉",
    description:
      "El espíritu del Entroido vuelve a las calles de Maceda en pleno verano con una jornada llena de color, música y diversión.",
    text:
      "El Entroido Quente se ha convertido en una de las celebraciones más originales del verano en Maceda. Vecinos y visitantes vuelven a sacar los disfraces, disfrutan de la animación, la gastronomía y el ambiente festivo, demostrando que el espíritu del carnaval puede vivirse en cualquier época del año.",
  },
  {
    title: "Festas das Neves",
    image: "/tradiciones/neves.png",
    emoji: "🎉",
    description:
      "Las fiestas patronales de Nosa Señora das Neves llenan Maceda de música, verbenas, pasacalles y actividades para todas las edades.",
    text:
      "Durante los primeros días de agosto el municipio vive sus jornadas más festivas con conciertos, gastronomía, actividades infantiles y un ambiente extraordinario tanto de día como de noche.",
  },
  {
    title: "O Magosto",
    image: "/tradiciones/magosto.png",
    emoji: "🌰",
    description:
      "El otoño trae consigo una de las tradiciones gallegas más queridas.",
    text:
      "Las castañas asadas, el vino nuevo y la música popular convierten el Magosto en una celebración perfecta para disfrutar de la gastronomía y del ambiente de Galicia.",
  },
  {
    title: "Música tradicional gallega",
    image: "/tradiciones/gaitas.png",
    emoji: "🎶",
    description:
      "La gaita, las panderetas y la música popular acompañan muchas de las fiestas de Maceda.",
    text:
      "Grupos tradicionales mantienen vivas las raíces culturales gallegas y llenan las plazas de música durante numerosas celebraciones a lo largo del año.",
  },
];

export default function TradicionesPage() {
  return (
    <main className="bg-stone-50">

      {/* HERO */}

      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">

        <Image
          src="/tradiciones/hero.png"
          alt="Tradiciones de Maceda"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        <div className="relative z-10 px-6 text-center text-white">

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Tradiciones de Maceda
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-100">
            Descubre las fiestas, costumbres y celebraciones que mantienen
            viva la esencia de uno de los pueblos con más identidad de
            Ourense.
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900">
              Vive Maceda como un vecino
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              Alojarte en O Recuncho es mucho más que descubrir paisajes o
              monumentos. También podrás conocer las tradiciones que forman
              parte de la historia de Maceda y que siguen reuniendo cada año a
              vecinos y visitantes.
            </p>

          </div>

          <div className="mt-20 space-y-16">

            {traditions.map((tradition, index) => (

              <article
                key={tradition.title}
                className={`overflow-hidden rounded-[30px] bg-white ring-1 ring-stone-200/70 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:grid md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >

                <div className="relative min-h-[340px] overflow-hidden">

                  <Image
                    src={tradition.image}
                    alt={tradition.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                </div>

                <div className="flex flex-col justify-center p-10 md:p-12">

                  <div className="text-5xl">
                    {tradition.emoji}
                  </div>

                  <h3 className="mt-6 text-3xl font-bold tracking-tight text-green-900 md:text-4xl">
                    {tradition.title}
                  </h3>

                  <p className="mt-6 text-lg font-medium leading-8 text-gray-700">
                    {tradition.description}
                  </p>

                  <p className="mt-6 leading-8 text-gray-600">
                    {tradition.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>       {/* BLOQUE FINAL */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900">
            Vive la auténtica Galicia
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-700">
            En O Recuncho no solo encontrarás un lugar donde descansar.
            También tendrás la oportunidad de conocer las tradiciones,
            la gastronomía y la hospitalidad de un pueblo que conserva
            con orgullo su identidad gallega.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Cada estación ofrece una experiencia diferente, desde la emoción
            del Entroido y los Felos hasta las fiestas patronales, las
            ferias tradicionales o el Magosto. Siempre encontrarás una buena
            razón para volver a Maceda.
          </p>

          <Link
            href="/"
            className="mt-12 inline-flex items-center rounded-full bg-green-800 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-green-900 hover:shadow-2xl"
          >
            ← Volver a la página principal
          </Link>

        </div>

      </section>

    </main>
  );
}