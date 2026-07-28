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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-4">
          Supermercados y panaderías cerca de O Recuncho
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Todo lo necesario para tu estancia lo encontrarás a pocos minutos del alojamiento.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {places.map((place, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >

              <div className="text-3xl mb-3">
                {place.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {place.title}
              </h3>

              <p className="text-gray-600 text-sm mb-2">
                📍 {place.address}
              </p>

              <p className="text-gray-600 mb-4">
                {place.description}
              </p>

              <a
                href={place.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
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