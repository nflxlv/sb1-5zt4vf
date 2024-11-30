export function ExpertOpinions() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Co mówią eksperci o Glukofin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Dr Maria Nowak</h3>
                <p className="text-gray-600">Diabetolog, 15 lat praktyki</p>
                <div className="flex items-center mt-1">
                  <span className="text-green-600 font-semibold">Certyfikowany ekspert</span>
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic">
              "Badania kliniczne potwierdzają skuteczność składników Glukofinu w regulacji poziomu cukru we krwi. 
              Szczególnie imponujące są wyniki dotyczące ekstraktu z morwy białej."
            </blockquote>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Prof. Jan Kowalski</h3>
                <p className="text-gray-600">Endokrynolog, Kierownik Kliniki</p>
                <div className="flex items-center mt-1">
                  <span className="text-green-600 font-semibold">Autor 120+ publikacji</span>
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic">
              "Glukofin wyróżnia się na tle innych suplementów kompleksowym podejściem do regulacji poziomu cukru.
              Połączenie chromu z ekstraktem z morwy białej daje synergiczny efekt."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}