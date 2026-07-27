export default function Excursions() {
  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Descubre Galicia desde O Recuncho
        </h2>


        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Una ubicación perfecta para disfrutar de naturaleza,
          patrimonio, gastronomía y algunas de las experiencias
          más especiales de Ourense.
        </p>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">



          {/* Ourense */}
          <ExcursionCard
            title="♨️ Ourense termal"
            distance="A unos 20 minutos"
            text="Disfruta de sus aguas termales, el casco histórico,
            la Catedral, las Burgas y la gastronomía local."
          />



          {/* Allariz */}
          <ExcursionCard
            title="🏘️ Allariz"
            distance="A unos 25 minutos"
            text="Una de las villas más bonitas de Galicia,
            con paseo fluvial, casco histórico y mucho encanto."
          />



          {/* Ribeira Sacra */}
          <ExcursionCard
            title="🍷 Ribeira Sacra"
            distance="Excursión imprescindible"
            text="Miradores sobre el Cañón del Sil, monasterios,
            viñedos y paisajes únicos."
          />



          {/* Río Mao */}
          <ExcursionCard
            title="🌿 Pasarelas del Río Mao"
            distance="Naturaleza y senderismo"
            text="Una ruta espectacular entre bosques,
            pasarelas y paisajes de la Ribeira Sacra."
          />



          {/* Santa Cristina */}
          <ExcursionCard
            title="⛪ Santa Cristina de Ribas de Sil"
            distance="Patrimonio histórico"
            text="Uno de los monasterios más bonitos de Galicia,
            rodeado de naturaleza."
          />



          {/* San Pedro */}
          <ExcursionCard
            title="🏰 San Pedro de Rocas"
            distance="Historia y tradición"
            text="Un lugar único para descubrir la Galicia
            más antigua y espiritual."
          />


        </div>



        <div className="mt-16 bg-white rounded-2xl p-8 shadow text-center">

          <h3 className="text-3xl font-bold mb-4">
            Planes según tu estancia
          </h3>


          <div className="grid md:grid-cols-3 gap-6 mt-8">


            <div>
              <h4 className="font-bold text-xl mb-2">
                🌅 Medio día
              </h4>

              <p className="text-gray-600">
                Ourense termal, compras y gastronomía.
              </p>
            </div>


            <div>
              <h4 className="font-bold text-xl mb-2">
                🚗 Un día completo
              </h4>

              <p className="text-gray-600">
                Ribeira Sacra, miradores y monasterios.
              </p>
            </div>


            <div>
              <h4 className="font-bold text-xl mb-2">
                🌲 Fin de semana
              </h4>

              <p className="text-gray-600">
                Naturaleza, rutas y pueblos con encanto.
              </p>
            </div>


          </div>

        </div>


      </div>

    </section>
  );
}



function ExcursionCard({
  title,
  distance,
  text,
}: {
  title: string;
  distance: string;
  text: string;
}) {

  return (

    <div className="bg-white rounded-2xl p-6 shadow">

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>


      <p className="font-semibold text-sm mb-4">
        📍 {distance}
      </p>


      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>


    </div>

  );
}