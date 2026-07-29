import Link from "next/link";
import Supermarkets from "@/components/Supermarkets";

export default function ComprasPage() {
  return (
    <main>

      <section className="bg-green-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">

          <h1 className="text-5xl font-bold">
            Supermercados y panaderías
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-green-100">
            Todo lo que necesitas para tu estancia: supermercados,
            alimentación, pan recién hecho y productos locales a pocos
            minutos de O Recuncho.
          </p>

          <Link
            href="/"
            className="mt-10 inline-block rounded-full bg-white px-6 py-3 font-semibold text-green-900 transition hover:bg-stone-100"
          >
            ← Volver al inicio
          </Link>

        </div>
      </section>

      <Supermarkets />

    </main>
  );
}