import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">

      <Hero />

{/* Presentación */}
<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-8">
      O Recuncho, alojamiento tranquilo en Galicia
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed">
      Descubre un alojamiento acogedor en Maceda, en el corazón de
      Ourense. Un lugar perfecto para descansar, desconectar y vivir
      la esencia de Galicia.
    </p>

    <p className="mt-5 text-lg text-gray-700 leading-relaxed">
      Con capacidad para cuatro personas y una ubicación privilegiada,
      O Recuncho es el punto de partida perfecto para descubrir la
      Ribeira Sacra, Allariz, Ourense y la Serra de San Mamede.
    </p>

  </div>
</section>
<QuickAccess />

  {/* Reserva */}
      <section
        id="ubicacion"
        className="py-24 px-6 bg-black text-white text-center"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Reserva tu estancia en O Recuncho
        </h2>


        <p className="max-w-2xl mx-auto text-lg mb-10">
          Descubre Galicia desde un alojamiento tranquilo,
          cómodo y perfectamente situado.
        </p>


        <a
          href="https://www.booking.com/hotel/es/o-recuncho-maceda.es.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Reservar ahora
        </a>


      </section>


    </main>
  );
}
 