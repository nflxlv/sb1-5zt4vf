export function KeyTakeaways() {
  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Najważniejsze informacje</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Zalety Glukofinu:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>100% naturalne składniki</li>
            <li>Potwierdzona skuteczność</li>
            <li>Bezpieczny w stosowaniu</li>
            <li>Szybkie efekty</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Wskazania:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Podwyższony poziom cukru</li>
            <li>Stan przedcukrzycowy</li>
            <li>Wsparcie przy cukrzycy typu 2</li>
            <li>Profilaktyka zdrowotna</li>
          </ul>
        </div>
      </div>
    </section>
  )
}