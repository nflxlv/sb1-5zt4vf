export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Product", "MedicalWebPage"],
    "name": "Glukofin",
    "description": "Naturalne wsparcie w kontrolowaniu poziomu cukru we krwi",
    "image": {
      "@type": "ImageObject",
      "url": "https://i.ibb.co/XxNXv4t/glukofin.png",
      "width": "800",
      "height": "600",
      "caption": "Glukofin - Naturalne wsparcie poziomu cukru we krwi"
    },
    "brand": {
      "@type": "Brand",
      "name": "Glukofin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/XxNXv4t/glukofin.png"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "524",
      "reviewCount": "524"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Anna Kowalska"
        },
        "datePublished": "2024-01-15",
        "reviewBody": "Glukofin pomógł mi ustabilizować poziom cukru. Polecam!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Marek Nowak"
        },
        "datePublished": "2024-01-20",
        "reviewBody": "Stosuję od 3 miesięcy i widzę znaczną poprawę."
      }
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://1z1vt.doctortrf.com/l",
      "priceCurrency": "PLN",
      "price": "3.98",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Glukofin",
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.ibb.co/XxNXv4t/glukofin.png"
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}