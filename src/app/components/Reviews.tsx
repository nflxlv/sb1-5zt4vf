export function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Opinie klientów</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl font-bold text-green-800">4.8</div>
            <div>
              <div className="flex text-yellow-600 text-2xl" aria-label="5 gwiazdek">★★★★★</div>
              <div className="text-gray-700">524 opinie</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Anna Kowalska",
              date: "15.01.2024",
              comment: "Glukofin pomógł mi ustabilizować poziom cukru. Polecam!"
            },
            {
              name: "Marek Nowak",
              date: "20.01.2024",
              comment: "Stosuję od 3 miesięcy i widzę znaczną poprawę."
            }
          ].map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-yellow-600 text-xl" aria-label="5 gwiazdek">★★★★★</div>
                  <p className="font-semibold mt-1 text-gray-900">{review.name}</p>
                </div>
                <div className="text-sm">
                  <div className="text-gray-700">{review.date}</div>
                  <div className="text-green-800 flex items-center font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Zweryfikowany zakup
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}