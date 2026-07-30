export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-950 to-green-900 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">

          {/* Marca */}

          <div>

            <h2 className="text-3xl font-bold">
              O Recuncho
            </h2>

            <p className="mt-5 leading-8 text-green-100">
              Vivienda turística en el corazón de Maceda.
              El punto de partida perfecto para descubrir
              la Ribeira Sacra, Allariz, Ourense y la Serra
              de San Mamede.
            </p>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contacto
            </h3>

            <div className="space-y-3 text-green-100">

              <p>📞 Pilar · 606 398 691</p>

              <p>📞 Ramón · 696 116 232</p>

              <p>📍 Maceda · Ourense</p>

            </div>

          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Descubre</h3>
            <ul className="space-y-2 text-green-100"><li>Entorno</li><li>Restaurantes</li><li>Compras</li><li>Servicios</li><li>Senderismo</li><li>Tradiciones</li></ul>
          </div>

          {/* Reserva */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Reserva tu estancia
            </h3>

            <a
              href="https://www.booking.com/hotel/es/o-recuncho-maceda.es.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-8 py-4 font-bold text-green-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Reservar en Booking
            </a>

          </div>

        </div>

        <div className="mt-14 border-t border-green-800 pt-8 text-center text-sm text-green-300">

          © {new Date().getFullYear()} O Recuncho · Maceda (Ourense) · Hecho con ❤️ en Galicia

        </div>

      </div>

    </footer>
  );
}