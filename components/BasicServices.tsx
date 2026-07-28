export default function BasicServices() {
  const services = [
    {
      icon: "💊",
      title: "Farmacia María José Blanco Rodríguez",
      address: "Rúa Aurelaneo Ferreiro, 61, 32703 Maceda",
      maps: "https://www.google.com/maps/search/?api=1&query=Farmacia+María+José+Blanco+Rodríguez+Maceda",
    },
    {
      icon: "💊",
      title: "Farmacia M.ª Elvira Iglesias Fernández",
      address: "Praza Toldas, 12, 32700 Maceda",
      maps: "https://www.google.com/maps/search/?api=1&query=Farmacia+María+Elvira+Iglesias+Fernández+Maceda",
    },
    {
      icon: "🏥",
      title: "Centro de Saúde de Maceda",
      address: "Rúa do Toural, 0, 32703 Maceda",
      maps: "https://www.google.com/maps/search/?api=1&query=Centro+de+Saúde+de+Maceda",
    },
    {
      icon: "🏛️",
      title: "Concello de Maceda",
      address: "Rúa do Toural, 2, 32700 Maceda",
      maps: "https://www.google.com/maps/search/?api=1&query=Concello+de+Maceda",
    },
    {
      icon: "🚖",
      title: "Taxi Maceda Jorge",
      address: "Praza Benigno Álvarez, Maceda",
      maps: "https://www.google.com/maps/search/?api=1&query=Taxi+Maceda+Jorge",
    },
    {
      icon: "🚖",
      title: "Luis Quintela González",
      address: "Rúa Carreira Cova, 32703 Maceda",
      maps: "https://www.google.com/maps/search/?api=1&query=Luis+Quintela+González+Taxi+Maceda",
    },
    {
      icon: "🏧",
      title: "Cajeros automáticos",
      address: "ABANCA y Banco Santander en Maceda",
      maps: "https://www.google.com/maps/search/?api=1&query=cajeros+ABANCA+Banco+Santander+Maceda",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-4">
          Servicios básicos cerca de O Recuncho
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Todo lo necesario durante tu estancia lo encontrarás en el centro de Maceda.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >

              <div className="text-3xl mb-3">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                📍 {service.address}
              </p>

              <a
                href={service.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
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