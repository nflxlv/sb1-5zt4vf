export default function Reviews() {
  const reviews = [
    {
      name: "Anna Kowalska",
      rating: 5,
      comment: "Glukofin pomógł mi ustabilizować poziom cukru. Polecam!"
    },
    {
      name: "Marek Nowak",
      rating: 5,
      comment: "Stosuję od 3 miesięcy i widzę znaczną poprawę."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Opinie klientów</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
              </div>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}