import Image from "next/image";

const photos = [
  "/gallery/1.jpg",
  "/gallery/2.png",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.png",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-14 max-w-4xl text-center">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900">
            Descubre O Recuncho
          </h2>

          <p className="mt-5 text-xl leading-9 text-gray-600">
            Un recorrido por cada rincón de la vivienda para que puedas
            imaginar tu próxima estancia antes incluso de llegar.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {photos.map((photo, index) => (
            <div
              key={photo}
              className="group relative aspect-[4/3] overflow-hidden rounded-[30px] bg-white ring-1 ring-stone-200/60 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Image
                src={photo}
                alt={`O Recuncho - foto ${index + 1}`}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}