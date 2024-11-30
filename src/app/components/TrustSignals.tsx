export function TrustSignals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Gwarancja zwrotu</h3>
            <p className="text-gray-600">100% satysfakcji lub zwrot pieniędzy w ciągu 30 dni</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Bezpieczne płatności</h3>
            <p className="text-gray-600">Szyfrowane połączenie SSL</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Wsparcie 24/7</h3>
            <p className="text-gray-600">Pomoc techniczna przez całą dobę</p>
          </div>
        </div>
      </div>
    </section>
  );
}