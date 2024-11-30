export function QuickAnswerBox() {
  return (
    <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-600">
      {/* Add featured snippet optimized content */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-xl font-semibold mb-4">Co to jest Glukofin?</h2>
        <div className="bg-white p-4 rounded-lg mb-4">
          <p className="text-gray-700 mb-2">
            <strong>Definicja:</strong> Glukofin to naturalny suplement diety zawierający ekstrakt z morwy białej (40%), chrom (30%) i cynamon (20%), który wspiera prawidłowy poziom cukru we krwi.
          </p>
          <table className="min-w-full mb-4">
            <tbody>
              <tr>
                <td className="font-semibold pr-4">Skuteczność:</td>
                <td>87% pacjentów potwierdza działanie</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Czas działania:</td>
                <td>Pierwsze efekty po 14 dniach</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Dawkowanie:</td>
                <td>2 kapsułki dziennie podczas posiłku</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}