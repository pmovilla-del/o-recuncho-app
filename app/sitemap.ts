import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://o-recuncho-app.vercel.app";

  return [
    { url: `${baseUrl}/`, priority: 1 },
    { url: `${baseUrl}/restaurantes`, priority: 0.9 },
    { url: `${baseUrl}/compras`, priority: 0.9 },
    { url: `${baseUrl}/servicios`, priority: 0.9 },
    { url: `${baseUrl}/entorno`, priority: 0.9 },
    { url: `${baseUrl}/excursiones`, priority: 0.8 },
    { url: `${baseUrl}/senderismo`, priority: 0.8 },
    { url: `${baseUrl}/tradiciones`, priority: 0.8 },
  ];
}