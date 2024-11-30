export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Glukofin",
        "description": "Naturalny suplement diety wspierający prawidłowy poziom cukru we krwi",
        "image": {
          "@type": "ImageObject",
          "url": "https://i.ibb.co/XxNXv4t/glukofin.png",
          "width": "800",
          "height": "600"
        },
        "brand": {
          "@type": "Brand",
          "name": "Glukofin",
          "logo": {
            "@type": "ImageObject",
            "url": "https://i.ibb.co/XxNXv4t/glukofin.png"
          }
        },
        "offers": {
          "@type": "Offer",
          "url": "https://1z1vt.doctortrf.com/l",
          "priceCurrency": "PLN",
          "price": "3.98",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2024-12-31",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "Glukofin"
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
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Jak obniżyć poziom cukru we krwi naturalnie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aby obniżyć poziom cukru we krwi naturalnie: 1) Przyjmuj 2 kapsułki Glukofinu dziennie, 2) Ogranicz spożycie węglowodanów prostych, 3) Zwiększ aktywność fizyczną, 4) Kontroluj regularnie poziom cukru."
            }
          },
          {
            "@type": "Question",
            "name": "Jaki jest prawidłowy poziom cukru we krwi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Prawidłowy poziom cukru we krwi na czczo wynosi 70-99 mg/dL. Po posiłku nie powinien przekraczać 140 mg/dL. Przed posiłkiem powinien mieścić się w przedziale 70-130 mg/dL."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "Jak stosować Glukofin",
        "step": [
          {
            "@type": "HowToStep",
            "text": "Przyjmuj 2 kapsułki dziennie"
          },
          {
            "@type": "HowToStep",
            "text": "Popij dużą ilością wody"
          },
          {
            "@type": "HowToStep",
            "text": "Stosuj podczas posiłku"
          }
        ]
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