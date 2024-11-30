export default function ExpertQuotes() {
  const experts = [
    {
      name: "Dr Maria Nowak",
      title: "Diabetolog",
      credentials: "15 lat doświadczenia klinicznego",
      quote: "Glukofin wykazuje obiecujące rezultaty w badaniach klinicznych. Naturalne składniki wspierają metabolizm glukozy.",
      image: "/experts/dr-nowak.jpg"
    },
    {
      name: "Prof. Jan Kowalski",
      title: "Endokrynolog",
      credentials: "Kierownik Kliniki Endokrynologii",
      quote: "Regularne stosowanie Glukofinu może wspierać utrzymanie prawidłowego poziomu cukru we krwi.",
      image: "/experts/prof-kowalski.jpg"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Opinie Ekspertów</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h3 className="font-semibold">{expert.name}</h3>
                  <p className="text-sm text-gray-600">{expert.title}</p>
                  <p className="text-xs text-gray-500">{expert.credentials}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{expert.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}