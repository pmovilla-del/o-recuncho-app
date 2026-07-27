import Image from "next/image";

const places = [
  {
    title: "Ribeira Sacra",
    image: "/places/ribeira-sacra.jpg",
    time: "40 min",
    text: "Miradores, catamarán por los cañones del Sil y paisajes espectaculares.",
  },
  {
    title: "Allariz",
    image: "/places/allariz.jpg",
    time: "20 min",
    text: "Uno de los pueblos más bonitos de Galicia.",
  },
  {
    title: "Ourense",
    image: "/places/ourense.jpg",
    time: "30 min",
    text: "Termas, casco histórico y excelente gastronomía.",
  },
  {
    title: "Pasarelas del Río Mao",
    image: "/places/rio-mao.jpg",
    time: "45 min",
    text: "Una de las rutas de senderismo más bonitas de Galicia.",
  },
  {
    title: "San Pedro de Rocas",
    image: "/places/san-pedro.jpg",
    time: "25 min",
    text: "El monasterio excavado en la roca más antiguo de Galicia.",
  },
  {
    title: "Monasterio de Santa Cristina",
    image: "/places/santa-cristina.jpg",
    time: "50 min",
    text: "Un enclave único en plena Ribeira Sacra.",
  },
];
export default function Explore() {
  return (
    <section id="explorar" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-green-900">
          Descubre los alrededores
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Desde O Recuncho podrás visitar algunos de los lugares más bonitos de Galicia.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {places.map((place) => (
            <div
              key={place.title}
              className="overflow-hidden rounded-3xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={place.image}
                alt={place.title}
                width={700}
                height={450}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {place.title}
                </h3>

                <p className="mt-2 text-green-700 font-semibold">
                  🚗 {place.time} desde O Recuncho
                </p>

                <p className="mt-4 text-gray-600">
                  {place.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}