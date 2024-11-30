import { FAQPage } from 'schema-dts';

export default function FAQSchema() {
  const faqSchema: FAQPage = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak stosować Glukofin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zalecana dawka to 2 kapsułki dziennie, najlepiej podczas posiłku."
        }
      },
      {
        "@type": "Question",
        "name": "Czy Glukofin ma skutki uboczne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Glukofin jest bezpieczny w stosowaniu i nie wywołuje skutków ubocznych."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}