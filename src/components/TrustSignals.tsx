import Image from 'next/image';

export default function TrustSignals() {
  const certifications = [
    { name: "GMP Certified", image: "/gmp.png" },
    { name: "ISO 9001:2015", image: "/iso.png" },
    { name: "SSL Secure", image: "/ssl.png" }
  ];

  const guarantees = [
    {
      title: "100% Gwarancja Zwrotu",
      description: "30 dni na zwrot bez podania przyczyny",
      icon: "shield"
    },
    {
      title: "Bezpieczne Płatności",
      description: "Szyfrowane połączenie SSL",
      icon: "lock"
    },
    {
      title: "Wsparcie 24/7",
      description: "Pomoc techniczna i konsultacje",
      icon: "phone"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Gwarancje i Certyfikaty</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="border p-6 rounded-lg text-center">
              <div className="text-4xl text-green-600 mb-4">
                {/* Icon component would go here */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{guarantee.title}</h3>
              <p className="text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Szczegóły Gwarancji</h3>
          <div className="prose max-w-none">
            <ul className="space-y-4">
              <li>Pełny zwrot kosztów w ciągu 30 dni</li>
              <li>Zwrot środków w ciągu 14 dni roboczych</li>
              <li>Bezpłatna przesyłka zwrotna</li>
              <li>Bez zbędnych pytań i formalności</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Wsparcie Klienta</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Kontakt</h4>
              <ul className="space-y-2">
                <li>Email: pomoc@glukofin.pl</li>
                <li>Telefon: +48 800 123 456</li>
                <li>Godziny: 8:00 - 20:00 (Pon-Pt)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Wysyłka</h4>
              <ul className="space-y-2">
                <li>Darmowa dostawa od 100 PLN</li>
                <li>Wysyłka w 24h</li>
                <li>Śledzenie przesyłki</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}