export function Benefits() {
  const benefits = [
    {
      title: "Naturalne składniki",
      description: "100% naturalnych ekstraktów roślinnych"
    },
    {
      title: "Potwierdzona skuteczność",
      description: "Badania kliniczne potwierdzające działanie"
    },
    {
      title: "Bezpieczne stosowanie",
      description: "Bez skutków ubocznych"
    },
    {
      title: "Szybkie efekty",
      description: "Pierwsze rezultaty już po 2 tygodniach"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Dlaczego Glukofin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}