import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">

      <Hero />

{/* Presentación */}
<section className="py-16 md:py-20 px-6 bg-stone-50">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-green-900 mb-6">
      O Recuncho, alojamiento tranquilo en Galicia
    </h2>

    <p className="text-xl leading-9 text-gray-600">
      Descubre un alojamiento acogedor en Maceda, en el corazón de
      Ourense. Un lugar perfecto para descansar, desconectar y vivir
      la esencia de Galicia.
    </p>

    <p className="mt-5 text-xl leading-9 text-gray-600">
      Con capacidad para cuatro personas y una ubicación privilegiada,
      O Recuncho es el punto de partida perfecto para descubrir la
      Ribeira Sacra, Allariz, Ourense y la Sierra de San Mamede.
    </p>

  </div>
</section>
<QuickAccess />

  {/* Reserva */}
      <section
        id="ubicacion"
 className="py-24 px-6 bg-gradient-to-br from-green-950 via-green-900 to-black text-white text-center"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Reserva tu estancia en O Recuncho
        </h2>


        <p className="max-w-3xl mx-auto text-lg mb-10">
          Descubre Galicia desde un alojamiento tranquilo,
          cómodo y perfectamente situado.
        </p>


        <a
          href="https://www.booking.com/hotel/es/o-recuncho-maceda.es.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-900
hover:bg-stone-100
shadow-xl
hover:shadow-2xl
duration-500 px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Reservar ahora
        </a>


      </section>


    </main>
  );
}
 import Footer from "@/components/Footer";
 <Footer />