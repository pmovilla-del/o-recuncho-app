export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-6">

        <img
          src="/logo.png"
          alt="O Recuncho"
          className="w-40 mx-auto mb-6"
        />

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          O Recuncho
        </h1>

        <p className="text-xl md:text-2xl mb-8">
          Alojamiento tranquilo cerca de la Ribeira Sacra
        </p>

        <a
          href="https://www.booking.com/hotel/es/o-recuncho-maceda.es.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Reservar en Booking
        </a>

      </div>
    </section>
  );
}