export default function ComparisonTable() {
  return (
    <section id="comparison" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Porównanie z innymi suplementami</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Glukofin</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inne suplementy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Naturalne składniki</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">100%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Często syntetyczne</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Badania kliniczne</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Potwierdzona skuteczność</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rzadko badane</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Efekty</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Widoczne po 2 tygodniach</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Zróżnicowane</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}