export function CTASection() {
  return (
    <section className="bg-green-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Zacznij kontrolować poziom cukru już dziś</h2>
        <p className="text-xl mb-8 text-white">Dołącz do tysięcy zadowolonych klientów</p>
        <a 
          href="https://1z1vt.doctortrf.com/l" 
          className="bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          aria-label="Kup teraz w promocyjnej cenie 3.98 PLN"
        >
          Kup teraz za 3.98 PLN
        </a>
      </div>
    </section>
  )
}