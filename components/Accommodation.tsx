import {
  Bed,
  CookingPot,
  Tv,
  Snowflake,
  Thermometer,
  Car,
  Bath,
  Coffee,
} from "lucide-react";

const services = [
  {
    icon: Bed,
    title: "2 dormitorios",
    text: "Habitaciones cómodas y acogedoras.",
  },
  {
    icon: CookingPot,
    title: "Cocina equipada",
    text: "Todo lo necesario para cocinar durante tu estancia.",
  },
  {
    icon: Coffee,
    title: "Cafetera",
    text: "Empieza el día con un buen café.",
  },
  {
    icon: Tv,
    title: "TV",
    text: "Para relajarte después de un día de excursiones.",
  },
  {
    icon: Snowflake,
    title: "Aire acondicionado",
    text: "Confort en los días más calurosos.",
  },
  {
    icon: Thermometer,
    title: "Calefacción",
    text: "Ideal para disfrutar también en invierno.",
  },
  {
    icon: Bath,
    title: "Baño completo",
    text: "Con toallas y secador de pelo.",
  },
  {
    icon: Car,
    title: "Aparcamiento cercano",
    text: "Gratuito y muy próximo al alojamiento.",
  },
];

export default function Accommodation() {
  return (
    <section
      id="alojamiento"
      className="bg-stone-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-green-900">
          El alojamiento
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          Todo lo necesario para disfrutar de una estancia cómoda y descubrir
          algunos de los rincones más bonitos de Galicia.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <service.icon
                size={42}
                className="text-green-700"
              />

              <h3 className="mt-6 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {service.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}