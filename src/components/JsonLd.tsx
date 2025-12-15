export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Финансовый Навигатор",
    "image": "https://finpro.com/logo.png",
    "description": "Профессиональное бухгалтерское сопровождение, налоговая оптимизация и юридическая поддержка в Кыргызстане.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Фрунзе 402а, 4 этаж (Исанова/Фрунзе)",
      "addressLocality": "Бишкек",
      "addressRegion": "Бишкек",
      "postalCode": "720000",
      "addressCountry": "KG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.8746,
      "longitude": 74.5698
    },
    "url": "https://finpro.com",
    "telephone": "+996555123456",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
