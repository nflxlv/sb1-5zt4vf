'use client'

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 md:hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-bold text-green-800">3.98 PLN</p>
          <p className="text-sm text-gray-600">Promocyjna cena</p>
        </div>
        <a
          href="https://1z1vt.doctortrf.com/l"
          className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-flex items-center"
        >
          Kup teraz
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}