export default function DetailedInstructions() {
  const instructions = [
    {
      title: "Przygotowanie",
      steps: [
        "Przygotuj szklankę wody (200ml)",
        "Wyjmij 2 kapsułki Glukofinu"
      ]
    },
    {
      title: "Dawkowanie",
      steps: [
        "Przyjmuj 2 kapsułki dziennie",
        "Najlepiej podczas głównego posiłku",
        "Popij pełną szklanką wody"
      ]
    },
    {
      title: "Monitorowanie",
      steps: [
        "Mierz poziom cukru regularnie",
        "Zapisuj wyniki pomiarów",
        "Konsultuj się z lekarzem"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {instructions.map((section, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
          <ol className="list-decimal pl-5 space-y-2">
            {section.steps.map((step, idx) => (
              <li key={idx} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}