import { Bed, MapPin, Car, Mountain } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Bed,
      title: "4 huéspedes",
      text: "2 dormitorios",
    },
    {
      icon: MapPin,
      title: "Centro de Maceda",
      text: "Ubicación privilegiada",
    },
    {
      icon: Car,
      title: "40 min",
      text: "Ribeira Sacra",
    },
    {
      icon: Mountain,
      title: "Naturaleza",
      text: "Serra de San Mamede",
    },
  ];

  return (
    <section className="-mt-10 relative z-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="mx-auto text-green-700" size={38} />
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}