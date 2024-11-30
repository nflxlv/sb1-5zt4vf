export default function ExpertSection() {
  return (
    <section id="experts" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Opinie ekspertów</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h3 className="font-semibold">Dr Maria Nowak</h3>
                <p className="text-sm text-gray-600">Diabetolog, 15 lat doświadczenia</p>
              </div>
            </div>
            <blockquote className="text-gray-700">
              "Glukofin wykazuje obiecujące rezultaty w badaniach klinicznych. Naturalne składniki i bezpieczeństwo stosowania to jego główne zalety."
            </blockquote>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <h3 className="font-semibold">Prof. Jan Kowalski</h3>
                <p className="text-sm text-gray-600">Endokrynolog, Kierownik Kliniki</p>
              </div>
            </div>
            <blockquote className="text-gray-700">
              "Regularne stosowanie Glukofinu może wspierać utrzymanie prawidłowego poziomu cukru we krwi."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}