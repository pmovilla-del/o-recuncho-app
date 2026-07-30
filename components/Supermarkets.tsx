export default function Supermarkets() {
  const places = [
    {
      icon: "🛒",
      title: "Eroski City",
      address: "Av. dos Milagros, 34, 32700 Maceda",
      description:
        "Supermercado con alimentación, productos frescos y todo lo necesario para la estancia.",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Eroski+City+Maceda",
    },
    {
      icon: "🛒",
      title: "Supermercado Coviran",
      address: "Rúa Cardenal Quiroga Palacios, 9, 32703 Maceda",
      description:
        "Comercio de proximidad con productos de alimentación y básicos del día a día.",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Coviran+Maceda",
    },
    {
      icon: "🛒",
      title: "SPAR Maceda",
      address: "Praza As Toldas nº 6, Bajo, 32700 Maceda",
      description:
        "Supermercado cercano en el centro de Maceda para pequeñas compras.",
      maps:
        "https://www.google.com/maps/search/?api=1&query=SPAR+Maceda",
    },
    {
      icon: "🥖",
      title: "Panadería Delfín",
      address: "Rúa da Pena, 4, 32700 Maceda",
      description:
        "Panadería tradicional con pan fresco, empanadas y productos de horno.",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Panadería+Delfín+Maceda",
    },
    {
      icon: "🥐",
      title: "Panadería-Pastelería Agustín",
      address: "Praza das Toldas, 15, 32700 Maceda",
      description:
        "Panadería y pastelería local para desayunos y productos frescos.",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Panadería+Pastelería+Agustín+Maceda",
    },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-6">
          Supermercados y panaderías cerca de O Recuncho
        </h2>

        <p className="mx-auto max-w-3xl text-center text-xl leading-9 text-gray-600 mb-16">
          Todo lo necesario para tu estancia lo encontrarás a pocos minutos del alojamiento.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {places.map((place, index) => (
            <div
              key={index}
              className="group rounded-[30px] bg-white ring-1 ring-stone-200/70 p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-5xl mb-5">
                {place.icon}
              </div>

              <h3 className="text-3xl font-bold tracking-tight mb-4 text-green-900">
                {place.title}
              </h3>

              <p className="rounded-xl bg-stone-100 px-4 py-3 text-gray-700 font-medium mb-4">
                📍 {place.address}
              </p>

              <p className="text-gray-600 leading-8 mb-8">
                {place.description}
              </p>

              <a
                href={place.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-green-800 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-green-900 hover:shadow-2xl"
              >
                Ver en Google Maps →
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}