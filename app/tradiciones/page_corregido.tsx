import Image from "next/image";
import Link from "next/link";

const traditions = [
  {
    title: "Entroido de Maceda",
    image: "/tradiciones/felos.png",
    emoji: "🎭",
    description:
      "El Entroido de Maceda es uno de los carnavales tradicionales más importantes de Galicia. Sus protagonistas son los Felos, personajes con máscaras de madera talladas a mano, trajes tradicionales y grandes chocas que recorren las calles anunciando la llegada del carnaval.",
    text:
      "Declarado Fiesta de Interés Turístico de Galicia, el Entroido de Maceda conserva una tradición centenaria que atrae cada año a miles de visitantes. Vivirlo en primera persona es una experiencia única para conocer la cultura popular gallega.",
  },
  {
    title: "A Baixada da Marela",
    image: "/tradiciones/marela.png",
    emoji: "🐂",
    description:
      "Una de las celebraciones más singulares del municipio, donde tradición, humor y participación popular convierten las calles de Maceda en una gran fiesta.",
    text:
      "La Baixada da Marela forma parte de la identidad del pueblo y es una cita muy esperada por vecinos y visitantes. Música, alegría y tradición se unen en una jornada inolvidable.",
  },
  {
    title: "As Feiras de Maceda",
    image: "/tradiciones/feira.png",
    emoji: "🛍️",
    description:
      "Las ferias tradicionales siguen siendo uno de los principales puntos de encuentro de la comarca.",
    text:
      "En ellas podrás encontrar productos locales, artesanía, alimentación, comercio tradicional y disfrutar del ambiente auténtico de un pueblo gallego que mantiene vivas sus costumbres.",
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
    <main className="bg-stone-100">

      <section className="relative h-[60vh]">

        <Image
          src="/tradiciones/hero.jpg"
          alt="Tradiciones de Maceda"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <h1 className="text-5xl md:text-7xl font-bold">
              Tradiciones de Maceda
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8">
              Descubre las fiestas, costumbres y celebraciones que mantienen
              viva la esencia de uno de los pueblos con más identidad de
              Ourense.
            </p>

          </div>

        </div>

      </section>

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl font-bold text-green-900">
              Vive Maceda como un vecino
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Alojarte en O Recuncho es mucho más que descubrir paisajes o
              monumentos. También podrás conocer las tradiciones que forman
              parte de la historia de Maceda y que siguen reuniendo cada año a
              vecinos y visitantes.
            </p>

          </div>

          <div className="mt-20 space-y-14">
                      {traditions.map((tradition) => (
              <article
                key={tradition.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl md:grid md:grid-cols-2"
              >
                <div className="relative min-h-[320px]">

                  <Image
                    src={tradition.image}
                    alt={tradition.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="flex flex-col justify-center p-10">

                  <div className="text-5xl">
                    {tradition.emoji}
                  </div>

                  <h3 className="mt-6 text-4xl font-bold text-green-900">
                    {tradition.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-gray-700 font-medium">
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

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold text-green-900">
            Vive la auténtica Galicia
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-700">
            En O Recuncho no solo encontrarás un lugar donde descansar.
            También tendrás la oportunidad de conocer las tradiciones,
            la gastronomía y la hospitalidad de un pueblo que conserva
            con orgullo su identidad gallega.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cada estación ofrece una experiencia diferente, desde la emoción
            del Entroido y los Felos hasta las fiestas patronales, las
            ferias tradicionales o el Magosto. Siempre encontrarás una buena
            razón para volver a Maceda.
          </p>

          <Link
            href="/"
            className="mt-12 inline-flex rounded-full bg-green-800 px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-900"
          >
            ← Volver a la página principal
          </Link>

        </div>

      </section>

    </main>
  );
}