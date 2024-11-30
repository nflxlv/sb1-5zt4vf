export default function FAQ() {
  const faqs = [
    {
      question: "Jak stosować Glukofin?",
      answer: "Zalecana dawka to 2 kapsułki dziennie, najlepiej podczas posiłku."
    },
    {
      question: "Czy Glukofin ma skutki uboczne?",
      answer: "Glukofin jest bezpieczny w stosowaniu i nie wywołuje skutków ubocznych."
    },
    {
      question: "Jak szybko zauważę efekty?",
      answer: "Pierwsze efekty można zaobserwować już po 2 tygodniach regularnego stosowania."
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