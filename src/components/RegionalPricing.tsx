export default function RegionalPricing() {
  const regions = [
    {
      region: "Polska Centralna",
      price: "3.98",
      shipping: "15.00",
      time: "1-2 dni robocze"
    },
    {
      region: "Polska Południowa",
      price: "3.98",
      shipping: "15.00",
      time: "1-2 dni robocze"
    },
    {
      region: "Polska Północna",
      price: "3.98",
      shipping: "15.00",
      time: "2-3 dni robocze"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Dostępność Regionalna</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{region.region}</h3>
              <div className="space-y-2">
                <p className="text-green-600 font-bold text-2xl">{region.price} PLN</p>
                <p className="text-gray-600">Dostawa: {region.shipping} PLN</p>
                <p className="text-gray-600">Czas dostawy: {region.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">Informacje o Dostawie</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Metody Dostawy</h4>
              <ul className="space-y-2">
                <li>Kurier DPD</li>
                <li>InPost Paczkomaty</li>
                <li>Poczta Polska</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Metody Płatności</h4>
              <ul className="space-y-2">
                <li>BLIK</li>
                <li>Przelewy24</li>
                <li>Karty płatnicze</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}