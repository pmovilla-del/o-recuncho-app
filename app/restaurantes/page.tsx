import Link from "next/link";
import Restaurants from "@/components/Restaurants";

export default function RestaurantesPage() {
  return (
    <main>

      <section className="bg-green-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Dónde comer y tomar algo
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl">
            Descubre los mejores restaurantes, taperías, cafeterías y bares
            de Maceda para disfrutar de la gastronomía gallega durante tu estancia.
          </p>

          <Link
            href="/"
            className="inline-block mt-10 rounded-full bg-white px-6 py-3 font-semibold text-green-900 transition hover:bg-stone-100"
          >
            ← Volver al inicio
          </Link>

        </div>
      </section>

      <Restaurants />

    </main>
  );
}