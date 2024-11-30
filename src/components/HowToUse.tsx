export default function HowToUse() {
  const steps = [
    {
      title: "Dawkowanie",
      description: "2 kapsułki dziennie",
      timing: "Podczas posiłku"
    },
    {
      title: "Regularność",
      description: "Stosuj codziennie",
      timing: "Przez minimum 3 miesiące"
    },
    {
      title: "Monitorowanie",
      description: "Sprawdzaj poziom cukru",
      timing: "Co 2 tygodnie"
    }
  ];

  return (
    <section id="howto" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Jak stosować Glukofin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <p className="text-sm text-gray-500 mt-2">{step.timing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}