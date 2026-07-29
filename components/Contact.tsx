export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-green-900">
            ¿Necesitas ayuda para organizar tu estancia?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Si tienes cualquier duda sobre el alojamiento, o tu llegada a O Recuncho,
            estaremos encantados de ayudarte.
          </p>

        </div>

        <div className="mt-14 rounded-3xl bg-stone-100 p-10 shadow-xl">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-800 text-3xl text-white">
              📞
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-900">
                Contacta con nosotros
              </h3>

              <p className="text-gray-600">
                Llámanos o escríbenos por WhatsApp. Estaremos encantados de ayudarte.
              </p>
            </div>

          </div>

          <div className="mt-10 space-y-8">

            {/* CONTACTO 1 */}

            <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow md:flex-row md:items-center md:justify-between">

              <div>

                <h4 className="text-xl font-bold text-green-900">
                  Pilar
                </h4>

                <p className="mt-2 text-2xl font-bold text-gray-800">
                  📞 606 398 691
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="tel:+34606398691"
                  className="rounded-full bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
                >
                  📞 Llamar
                </a>

                <a
                  href="https://wa.me/34606398691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  💬 WhatsApp
                </a>

              </div>

            </div>

            {/* CONTACTO 2 */}

            <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow md:flex-row md:items-center md:justify-between">

              <div>

                <h4 className="text-xl font-bold text-green-900">
                  Ramón
                </h4>

                <p className="mt-2 text-2xl font-bold text-gray-800">
                  📞 696 116 232
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="tel:+34696116232"
                  className="rounded-full bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
                >
                  📞 Llamar
                </a>

                <a
                  href="https://wa.me/34696116232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  💬 WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}