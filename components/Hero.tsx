"use client";

import { useState } from "react";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <section
        id="inicio"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">

          <img
            src="/logo.png"
            alt="O Recuncho"
            className="mx-auto mb-14 w-36 drop-shadow-2xl transition-all duration-1000 hover:scale-105 md:w-40"
          />

          <h1 className="fade-up mb-6 text-6xl font-bold tracking-tight md:text-8xl">
            O Recuncho
          </h1>

          <p className="fade-up fade-delay-1 mb-4 text-2xl font-light leading-relaxed md:text-3xl">
            Alojamiento tranquilo en el corazón de Maceda
          </p>

          <p className="fade-up fade-delay-2 mx-auto mb-14 max-w-2xl text-xl leading-9 text-gray-100">
            Descubre la Ribeira Sacra, Allariz, Ourense y la Serra de San
            Mamede desde un alojamiento cómodo y acogedor.
          </p>

          <div className="fade-up fade-delay-3 flex flex-col justify-center gap-5 sm:flex-row">

            <a
              href="https://www.booking.com/hotel/es/o-recuncho-maceda.es.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-10 py-4 font-bold text-green-900 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-stone-100 hover:shadow-2xl"
            >
              Reservar en Booking
            </a>

            <button
              onClick={() => setShowContact(true)}
              className="rounded-full border-2 border-white bg-transparent px-10 py-4 font-bold text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:text-green-900 hover:shadow-2xl"
            >
              Contactar
            </button>

          </div>

        </div>

      </section>       {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">

          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl">

            <button
              onClick={() => setShowContact(false)}
              className="absolute right-6 top-5 text-3xl text-gray-500 transition hover:text-black"
            >
              ×
            </button>

            <h2 className="text-center text-4xl font-bold text-green-900">
              Contacta con nosotros
            </h2>

            <p className="mt-4 text-center text-gray-600">
              Estaremos encantados de ayudarte antes y durante tu estancia.
            </p>

            <div className="mt-10 space-y-8">

              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-md">

                <h3 className="text-2xl font-bold text-green-900">
                  Pilar
                </h3>

                <p className="mt-2 text-xl font-semibold">
                  📞 606 398 691
                </p>

                <div className="mt-5 flex flex-wrap gap-4">

                  <a
                    href="tel:+34606398691"
                    className="rounded-full bg-green-800 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-green-900 hover:shadow-xl"
                  >
                    📞 Llamar
                  </a>

                  <a
                    href="https://wa.me/34606398691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                  >
                    💬 WhatsApp
                  </a>

                </div>

              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-md">

                <h3 className="text-2xl font-bold text-green-900">
                  Ramón
                </h3>

                <p className="mt-2 text-xl font-semibold">
                  📞 696 116 232
                </p>

                <div className="mt-5 flex flex-wrap gap-4">

                  <a
                    href="tel:+34696116232"
                    className="rounded-full bg-green-800 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-green-900 hover:shadow-xl"
                  >
                    📞 Llamar
                  </a>

                  <a
                    href="https://wa.me/34696116232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                  >
                    💬 WhatsApp
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}