export default function AuthorCredentials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Dr Maria Nowak</h3>
              <p className="text-gray-600">Specjalista Diabetolog</p>
              <div className="mt-2 space-y-1 text-sm text-gray-500">
                <p>• 15 lat doświadczenia klinicznego</p>
                <p>• Członek Polskiego Towarzystwa Diabetologicznego</p>
                <p>• Autor 25+ publikacji naukowych</p>
              </div>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700">
              Jako specjalista z wieloletnim doświadczeniem w leczeniu zaburzeń metabolicznych,
              mogę potwierdzić skuteczność składników zawartych w Glukofinie. Badania kliniczne
              wykazują ich pozytywny wpływ na kontrolę poziomu cukru we krwi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}