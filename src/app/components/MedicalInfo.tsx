export function MedicalInfo() {
  return (
    <section id="medical-info" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Informacje medyczne</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Wskazania</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Podwyższony poziom cukru we krwi</li>
              <li>Stan przedcukrzycowy</li>
              <li>Wsparcie przy cukrzycy typu 2</li>
              <li>Zaburzenia metabolizmu glukozy</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Mechanizm działania</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zwiększenie wrażliwości na insulinę</li>
              <li>Spowolnienie wchłaniania cukrów</li>
              <li>Regulacja metabolizmu glukozy</li>
              <li>Ochrona komórek beta trzustki</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Interakcje</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Leki przeciwcukrzycowe - skonsultuj się z lekarzem</li>
              <li>Metformina - możliwe wzmocnienie działania</li>
              <li>Insulina - może wymagać dostosowania dawki</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Monitorowanie</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regularne pomiary poziomu cukru</li>
              <li>Kontrola HbA1c co 3 miesiące</li>
              <li>Obserwacja objawów hipoglikemii</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Ważne informacje</h3>
          <p className="text-gray-700">
            Glukofin jest suplementem diety i nie może zastąpić zrównoważonej diety ani przepisanych leków. 
            Przed rozpoczęciem stosowania skonsultuj się z lekarzem, szczególnie jeśli przyjmujesz leki na cukrzycę.
          </p>
        </div>
      </div>
    </section>
  );
}