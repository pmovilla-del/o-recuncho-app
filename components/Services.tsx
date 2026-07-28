const services = [

  {
    icon: "🛒",
    title: "Supermercados",
    text: "Compra todo lo necesario durante tu estancia sin necesidad de desplazarte."
  },
  {
    icon: "💊",
    title: "Servicios básicos",
    text: "Farmacia, comercios y servicios locales a pocos minutos."
  },
  {
    icon: "🏰",
    title: "Patrimonio y cultura",
    text: "Descubre el Castillo de Maceda, Allariz y la Ribeira Sacra."
  },
  {
    icon: "🌿",
    title: "Naturaleza",
    text: "Rutas, senderos y paisajes únicos de la provincia de Ourense."
  }
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Servicios y alrededores
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow"
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}