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
    <section className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-6">
          Servicios básicos cerca de O Recuncho
        </h2>

        <p className="mx-auto max-w-3xl text-center text-xl leading-9 text-gray-600 mb-16">
          Todo lo necesario durante tu estancia lo encontrarás en el centro de Maceda.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-[30px] bg-white ring-1 ring-stone-200/70 p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-4 text-green-900">
                {service.title}
              </h3>

              <p className="rounded-xl bg-stone-100 px-4 py-3 text-gray-700 font-medium mb-8">
                📍 {service.address}
              </p>

              <a
                href={service.maps}
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