export default function CTASection() {
  return (
    <section className="bg-green-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Zacznij kontrolować poziom cukru już dziś</h2>
        <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
          <p className="text-xl mb-2">Promocyjna cena</p>
          <p className="text-4xl font-bold mb-2">3,98 PLN</p>
          <p className="text-sm">Oferta ograniczona czasowo!</p>
        </div>
        <div className="space-y-4">
          <a 
            href="https://1z1vt.doctortrf.com/l"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Kup teraz w promocji
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-sm mt-4">
            Bezpieczne płatności • Szybka dostawa • 100% satysfakcji
          </p>
        </div>
      </div>
    </section>
  );
}