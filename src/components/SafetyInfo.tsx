export default function SafetyInfo() {
  return (
    <section id="safety" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Bezpieczeństwo stosowania</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-4">Przeciwwskazania</h3>
            <ul className="list-disc pl-6 space-y-2 text-red-700">
              <li>Ciąża i okres karmienia piersią</li>
              <li>Nadwrażliwość na składniki produktu</li>
              <li>Wiek poniżej 18 lat</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Certyfikaty bezpieczeństwa</h3>
            <ul className="list-disc pl-6 space-y-2 text-green-700">
              <li>Certyfikat GMP</li>
              <li>Certyfikat ISO 9001:2015</li>
              <li>Atesty jakości składników</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}