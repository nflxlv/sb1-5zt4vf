import { HowTo } from 'schema-dts';

export default function HowToSchema() {
  const howToSchema: HowTo = {
    "@type": "HowTo",
    "name": "Jak stosować Glukofin",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
}