export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "O Recuncho",
    description:
      "Vivienda turística en Maceda (Ourense), ideal para descubrir la Ribeira Sacra, Allariz y la Serra de San Mamede.",
    url: "https://o-recuncho-app.vercel.app",
    image: "https://o-recuncho-app.vercel.app/og-image.jpg",
    telephone: ["+34606398691", "+34696116232"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maceda",
      addressRegion: "Ourense",
      addressCountry: "ES",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}