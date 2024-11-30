import Image from 'next/image'

export function ProductOverview() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Glukofin - Naturalne wsparcie poziomu cukru
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Skuteczne rozwiązanie oparte na naturalnych składnikach, wspierające prawidłowy poziom cukru we krwi.
            </p>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-600 text-2xl" aria-label="5 gwiazdek">★★★★★</div>
                <span className="text-gray-700">(524 opinie)</span>
              </div>
              <div className="bg-green-700 text-white px-4 py-2 rounded-lg inline-block mb-4">
                <span className="font-semibold">Super cena:</span> tylko 3.98 PLN
              </div>
              <div>
                <a 
                  href="https://1z1vt.doctortrf.com/l" 
                  className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors inline-block"
                  aria-label="Sprawdź cenę - przekierowanie do sklepu"
                >
                  Sprawdź cenę
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full">
            <Image
              src="https://i.ibb.co/XxNXv4t/glukofin.png"
              alt="Glukofin - Suplement diety na poziom cukru"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'contain',
                objectPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}