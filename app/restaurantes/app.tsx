import Restaurants from "@/components/Restaurants";
import Link from "next/link";

export default function RestaurantesPage() {
  return (
    <main>

      <section className="bg-green-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Dónde comer y tomar algo
          </h1>

          <p className="mt-4 text-xl opacity-90">
            Descubre los restaurantes, taperías, cafeterías y bares de Maceda
            para disfrutar de la gastronomía gallega durante tu estancia.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 bg-white text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-stone-100 transition"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>

      <Restaurants />

    </main>
  );
}