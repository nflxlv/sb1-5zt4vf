export default function WhoShouldAvoid() {
  const categories = [
    {
      title: "Przeciwwskazania bezwzględne",
      conditions: [
        "Ciąża i okres karmienia piersią",
        "Osoby poniżej 18 roku życia",
        "Uczulenie na składniki produktu"
      ]
    },
    {
      title: "Wymagana konsultacja lekarska",
      conditions: [
        "Osoby przyjmujące leki na cukrzycę",
        "Pacjenci z chorobami nerek",
        "Osoby przed zabiegami chirurgicznymi"
      ]
    }
  ];

  return (
    <div className="bg-red-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-red-800 mb-6">Przeciwwskazania</h3>
      {categories.map((category, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <h4 className="text-lg font-medium text-red-700 mb-3">{category.title}</h4>
          <ul className="list-disc pl-5 space-y-2">
            {category.conditions.map((condition, idx) => (
              <li key={idx} className="text-red-600">{condition}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-6 p-4 bg-white rounded-lg">
        <p className="text-sm text-gray-600">
          W przypadku wątpliwości zawsze skonsultuj się z lekarzem przed rozpoczęciem stosowania suplementu.
        </p>
      </div>
    </div>
  );
}