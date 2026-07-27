import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";

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

          <p className="text-lg text-gray-700 mt-5 leading-relaxed">
            Su ubicación permite disfrutar de naturaleza, gastronomía,
            cultura y excursiones a lugares únicos como Allariz,
            la Ribeira Sacra y las termas de Ourense.
          </p>

        </div>

      </section>



      {/* Galería */}
      <section id="galeria">
        <Gallery />
      </section>




      {/* Servicios */}
      <section id="servicios">
        <Services />
      </section>




      {/* Distancias */}
      <section className="py-20 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Distancias desde O Recuncho
          </h2>


          <div className="grid md:grid-cols-4 gap-6">


            <div className="bg-white rounded-xl p-6 text-center shadow">
              <h3 className="text-xl font-bold">
                📍 Maceda
              </h3>
              <p className="mt-3 text-gray-600">
                En el propio municipio.
                Servicios y comercios cercanos.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 text-center shadow">
              <h3 className="text-xl font-bold">
                ♨️ Ourense
              </h3>
              <p className="mt-3 text-gray-600">
                20 minutos.
                Termas, gastronomía y ciudad.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 text-center shadow">
              <h3 className="text-xl font-bold">
                🏘️ Allariz
              </h3>
              <p className="mt-3 text-gray-600">
                25 minutos.
                Villa histórica y paseo fluvial.
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 text-center shadow">
              <h3 className="text-xl font-bold">
                🍷 Ribeira Sacra
              </h3>
              <p className="mt-3 text-gray-600">
                Excursión imprescindible.
                Miradores y monasterios.
              </p>
            </div>


          </div>

        </div>

      </section>





      {/* Lugares cercanos con fotos */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">


          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Descubre nuestro entorno
          </h2>


          <p className="text-center text-gray-600 text-lg mb-12">
            Desde O Recuncho podrás conocer algunos de los rincones más
            especiales de Ourense y la Ribeira Sacra.
          </p>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">



            <Place
              image="/places/allariz.jpg"
              title="Allariz"
              distance="A unos 25 minutos"
              text="Una de las villas más bonitas de Galicia, con casco histórico, río, paseos y gastronomía."
            />


            <Place
              image="/places/ourense.jpg"
              title="Ourense"
              distance="A unos 20 minutos"
              text="Ciudad termal con aguas calientes, patrimonio, restaurantes y ambiente gallego."
            />


            <Place
              image="/places/ribeira-sacra.jpg"
              title="Ribeira Sacra"
              distance="Excursión imprescindible"
              text="Miradores, viñedos, monasterios y paisajes únicos sobre los ríos Sil y Miño."
            />


            <Place
              image="/places/rio-mao.jpg"
              title="Río Mao"
              distance="Ruta de naturaleza"
              text="Pasarelas, senderos y naturaleza en uno de los rincones más espectaculares de Galicia."
            />


            <Place
              image="/places/san-pedro.jpg"
              title="San Pedro"
              distance="Patrimonio cercano"
              text="Historia, arquitectura tradicional y tranquilidad gallega."
            />


            <Place
              image="/places/santa-cristina.jpg"
              title="Santa Cristina de Ribas de Sil"
              distance="Ribeira Sacra"
              text="Monasterio histórico rodeado de bosque y uno de los lugares más especiales de la zona."
            />


          </div>


        </div>

      </section>





      {/* Experiencia */}
      <section className="py-20 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto">


          <h2 className="text-4xl font-bold text-center mb-12">
            Vive la experiencia gallega
          </h2>


          <div className="grid md:grid-cols-3 gap-8">


            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">
                🌿 Naturaleza
              </h3>
              <p className="text-gray-600">
                Senderismo, montañas, ríos y paisajes para desconectar.
              </p>
            </div>


            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">
                🍷 Gastronomía
              </h3>
              <p className="text-gray-600">
                Productos locales, vinos gallegos y restaurantes cercanos.
              </p>
            </div>


            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">
                🏰 Cultura
              </h3>
              <p className="text-gray-600">
                Castillos, monasterios y pueblos con encanto.
              </p>
            </div>


          </div>


        </div>

      </section>





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
          className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold"
        >
          Reservar ahora
        </a>


      </section>


    </main>
  );
}



function Place({
  image,
  title,
  distance,
  text,
}: {
  image: string;
  title: string;
  distance: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-sm font-semibold mb-3">
          📍 {distance}
        </p>

        <p className="text-gray-600">
          {text}
        </p>

      </div>

    </div>
  );
}