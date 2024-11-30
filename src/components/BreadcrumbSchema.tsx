import { BreadcrumbList } from 'schema-dts';

export default function BreadcrumbSchema() {
  const breadcrumbSchema: BreadcrumbList = {
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
        "name": "Składniki",
        "item": "https://www.glukofin.pl/ingredients"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}