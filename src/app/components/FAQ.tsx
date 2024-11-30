export default function FAQ() {
  const faqs = [
    {
      question: "Jak obniżyć poziom cukru we krwi naturalnie?",
      answer: "Aby obniżyć poziom cukru we krwi naturalnie: 1) Przyjmuj 2 kapsułki Glukofinu dziennie, 2) Ogranicz spożycie węglowodanów prostych, 3) Zwiększ aktywność fizyczną, 4) Kontroluj regularnie poziom cukru."
    },
    {
      question: "Jaki jest prawidłowy poziom cukru we krwi?",
      answer: "Prawidłowy poziom cukru we krwi na czczo wynosi 70-99 mg/dL. Po posiłku nie powinien przekraczać 140 mg/dL. Przed posiłkiem powinien mieścić się w przedziale 70-130 mg/dL."
    },
    {
      question: "Jak szybko Glukofin obniża poziom cukru?",
      answer: "Pierwsze efekty działania Glukofinu są widoczne po 14 dniach regularnego stosowania. Po 30 dniach 87% pacjentów obserwuje znaczącą poprawę. Pełna stabilizacja następuje po 2-3 miesiącach."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Często zadawane pytania</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}