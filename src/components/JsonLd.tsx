export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Product", "MedicalWebPage"],
    "name": "Glukofin",
    "description": "Naturalne wsparcie w kontrolowaniu poziomu cukru we krwi",
    "medicalAudience": ["Diabetics", "Pre-diabetics", "Health-conscious individuals"],
    "brand": {
      "@type": "Brand",
      "name": "Glukofin"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "524"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "PLN",
      "price": "3.98",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2024-12-31"
    },
    "mainEntity": {
      "@type": "HowTo",
      "name": "Jak stosować Glukofin",
      "image": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/XxNXv4t/glukofin.png"
      },
      "step": [
        {
          "@type": "HowToStep",
          "text": "Przyjmuj 2 kapsułki dziennie",
          "image": "https://i.ibb.co/XxNXv4t/glukofin.png"
        },
        {
          "@type": "HowToStep",
          "text": "Popij dużą ilością wody",
          "image": "https://i.ibb.co/XxNXv4t/glukofin.png"
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Glukofin",
          "item": "https://www.glukofin.pl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Jak stosować",
          "item": "https://www.glukofin.pl/#how-to-use"
        }
      ]
    },
    "medicalSpecialty": ["Diabetology", "Endocrinology"],
    "relevantSpecialty": ["Diabetology", "Endocrinology"],
    "study": [
      {
        "@type": "MedicalStudy",
        "studySubject": "Wpływ Glukofinu na poziom cukru we krwi",
        "studyLocation": "Polska",
        "healthCondition": "Wysoki poziom cukru we krwi",
        "outcome": "87% uczestników zaobserwowało poprawę"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}