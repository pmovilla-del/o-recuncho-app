export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="text-xl font-bold">
          O Recuncho
        </div>

        <div className="flex items-center gap-6">

          <a
            href="#inicio"
            className="hover:text-gray-600 transition"
          >
            Inicio
          </a>

          <a
            href="#alojamiento"
            className="hover:text-gray-600 transition"
          >
            Alojamiento
          </a>

          <a
            href="#contacto"
            className="hover:text-gray-600 transition"
          >
            Contacto
          </a>

          <a
            href="https://www.booking.com/hotel/es/o-recuncho-maceda.es.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Reservar
          </a>

        </div>
      </div>
    </nav>
  );
}