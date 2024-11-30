export function IngredientBreakdown() {
  const ingredients = [
    {
      name: "Morwa Biała",
      benefit: "Wspiera metabolizm glukozy",
      research: "45 badań klinicznych",
      percentage: "40%"
    },
    {
      name: "Chrom",
      benefit: "Reguluje poziom cukru we krwi",
      research: "23 badania kliniczne",
      percentage: "30%"
    },
    {
      name: "Cynamon",
      benefit: "Wspomaga metabolizm",
      research: "18 badań klinicznych",
      percentage: "20%"
    }
  ];

  return (
    <section id="ingredients" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Składniki Glukofinu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{ingredient.name}</h3>
              <div className="space-y-4">
                <div className="relative h-2 bg-gray-200 rounded">
                  <div 
                    className="absolute h-2 bg-green-600 rounded"
                    style={{ width: ingredient.percentage }}
                  />
                </div>
                <p className="text-sm text-gray-600">{ingredient.benefit}</p>
                <p className="text-xs text-gray-500">{ingredient.research}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}