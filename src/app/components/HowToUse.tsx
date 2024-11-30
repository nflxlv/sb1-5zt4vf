export function HowToUse() {
  // Add step-by-step instructions targeting featured snippets
  return (
    <section id="howto" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Jak stosować Glukofin - instrukcja krok po kroku</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Krok 1: Dawkowanie</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Weź 2 kapsułki Glukofinu</li>
              <li>Przyjmij podczas posiłku</li>
              <li>Popij dużą ilością wody</li>
            </ol>
          </div>
          {/* ... rest of the steps */}
        </div>
      </div>
    </section>
  );
}