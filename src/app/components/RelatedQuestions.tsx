export function RelatedQuestions() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Często zadawane pytania o cukrzycy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Jaki jest prawidłowy poziom cukru we krwi?</h3>
            <p className="text-gray-700">
              Na czczo: 70-99 mg/dL<br />
              2 godziny po posiłku: poniżej 140 mg/dL<br />
              Przed posiłkiem: 70-130 mg/dL
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Jakie są objawy wysokiego cukru?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Wzmożone pragnienie</li>
              <li>Częste oddawanie moczu</li>
              <li>Zmęczenie</li>
              <li>Zaburzenia widzenia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}