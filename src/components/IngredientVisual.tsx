import Image from 'next/image';

export default function IngredientVisual() {
  const ingredients = [
    {
      name: "Morwa Biała",
      percentage: 40,
      benefits: ["Wspiera metabolizm glukozy", "Naturalne źródło antyoksydantów"],
      image: "/ingredients/morwa.jpg"
    },
    {
      name: "Chrom",
      percentage: 30,
      benefits: ["Reguluje poziom cukru", "Wspomaga metabolizm"],
      image: "/ingredients/chrom.jpg"
    },
    {
      name: "Cynamon",
      percentage: 20,
      benefits: ["Wspiera trawienie", "Naturalne właściwości przeciwzapalne"],
      image: "/ingredients/cynamon.jpg"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Składniki Glukofinu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="relative h-48 mb-4">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{ingredient.name}</h3>
              <div className="relative h-2 bg-gray-200 rounded mb-4">
                <div
                  className="absolute h-2 bg-green-600 rounded"
                  style={{ width: `${ingredient.percentage}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">{ingredient.percentage}% składu</p>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {ingredient.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}