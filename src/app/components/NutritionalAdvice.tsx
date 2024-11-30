export function NutritionalAdvice() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Zalecenia żywieniowe przy wysokim cukrze</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Produkty zalecane</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Warzywa nieskrobiowe</li>
              <li>Chude mięso i ryby</li>
              <li>Produkty pełnoziarniste</li>
              <li>Orzechy i nasiona</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Produkty do unikania</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Słodycze i cukier</li>
              <li>Napoje gazowane</li>
              <li>Białe pieczywo</li>
              <li>Przetworzona żywność</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}