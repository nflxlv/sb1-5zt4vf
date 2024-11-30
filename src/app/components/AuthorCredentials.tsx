export function AuthorCredentials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Eksperci o Glukofin</h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Dr Maria Nowak</h3>
              <p className="text-gray-600">Specjalista diabetolog</p>
              <p className="mt-2">"Glukofin wykazuje obiecujące rezultaty w badaniach klinicznych. Naturalne składniki wspierają metabolizm glukozy."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}