import Image from 'next/image'

export function ProductOverview() {
  return (
    <section id="overview" className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Glukofin - Naturalne wsparcie poziomu cukru
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Skuteczne rozwiązanie oparte na naturalnych składnikach, wspierające prawidłowy poziom cukru we krwi.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Super cena: 3.98 PLN
              </span>
            </div>
            <a 
              href="https://1z1vt.doctortrf.com/l" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Sprawdź cenę
            </a>
          </div>
        </div>
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src="https://i.ibb.co/XxNXv4t/glukofin.png"
            alt="Glukofin - Suplement diety na poziom cukru"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}