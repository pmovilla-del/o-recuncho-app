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
    <section id="galeria" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Galería
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {photos.map((photo, index) => (
            <div
              key={photo}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={photo}
                alt={`O Recuncho - foto ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}