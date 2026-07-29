"use client";

import { useState } from "react";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">

          <img
            src="/logo.png"
            alt="O Recuncho"
            className="w-40 mx-auto mb-8"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            O Recuncho
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed mb-4">
            Alojamiento tranquilo en el corazón de Maceda
          </p>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Descubre la Ribeira Sacra, Allariz, Ourense y la Serra de San
            Mamede desde un alojamiento cómodo y acogedor.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="https://www.booking.com/hotel/es/o-recuncho-maceda.es.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white text-green-900 px-10 py-4 font-bold shadow-lg hover:bg-gray-100 transition"
            >
              Reservar en Booking
            </a>

            <button
              onClick={() => setShowContact(true)}
              className="rounded-full border-2 border-white px-10 py-4 font-bold hover:bg-white hover:text-green-900 transition"
            >
              Contactar
            </button>

          </div>

        </div>
      </section>

      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">

          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl">

            <button
              onClick={() => setShowContact(false)}
              className="absolute right-6 top-5 text-3xl text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold text-green-900 text-center">
              Contacta con nosotros
            </h2>

            <p className="mt-4 text-center text-gray-600">
              Estaremos encantados de ayudarte antes y durante tu estancia.
            </p>

            <div className="mt-10 space-y-8">

              {/* PILAR */}

              <div className="rounded-2xl bg-stone-100 p-6">

                <h3 className="text-2xl font-bold text-green-900">
                  Pilar
                </h3>

                <p className="mt-2 text-xl font-semibold">
                  📞 606 398 691
                </p>

                <div className="mt-5 flex flex-wrap gap-4">

                  <a
                    href="tel:+34606398691"
                    className="rounded-full bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900 transition"
                  >
                    📞 Llamar
                  </a>

                  <a
                    href="https://wa.me/34606398691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
                  >
                    💬 WhatsApp
                  </a>

                </div>

              </div>

              {/* RAMÓN */}

              <div className="rounded-2xl bg-stone-100 p-6">

                <h3 className="text-2xl font-bold text-green-900">
                  Ramón
                </h3>

                <p className="mt-2 text-xl font-semibold">
                  📞 696 116 232
                </p>

                <div className="mt-5 flex flex-wrap gap-4">

                  <a
                    href="tel:+34696116232"
                    className="rounded-full bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900 transition"
                  >
                    📞 Llamar
                  </a>

                  <a
                    href="https://wa.me/34696116232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
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