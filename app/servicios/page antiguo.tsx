import Link from "next/link";
import BasicServices from "@/components/BasicServices";

export default function ServiciosPage() {
  return (
    <main>

      <section className="bg-green-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">

          <h1 className="text-5xl font-bold">
            Servicios básicos
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-green-100">
            Durante tu estancia en O Recuncho tendrás muy cerca farmacias,
            centro de salud, taxis, cajeros automáticos y otros servicios
            esenciales para que no te falte de nada.
          </p>

          <Link
            href="/"
            className="mt-10 inline-block rounded-full bg-white px-6 py-3 font-semibold text-green-900 transition hover:bg-stone-100"
          >
            ← Volver al inicio
          </Link>

        </div>
      </section>

      <BasicServices />

    </main>
  );
}