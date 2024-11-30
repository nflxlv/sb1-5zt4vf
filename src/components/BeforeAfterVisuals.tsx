import Image from 'next/image';

export default function BeforeAfterVisuals() {
  const results = [
    {
      period: "2 tygodnie",
      before: {
        value: "180 mg/dL",
        date: "01.01.2024"
      },
      after: {
        value: "140 mg/dL",
        date: "15.01.2024"
      }
    },
    {
      period: "1 miesiąc",
      before: {
        value: "175 mg/dL",
        date: "01.01.2024"
      },
      after: {
        value: "120 mg/dL",
        date: "01.02.2024"
      }
    }
  ];

  return (
    <div className="space-y-8">
      {results.map((result, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Rezultaty po {result.period}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2">Przed</h4>
              <p className="text-2xl font-bold text-red-600">{result.before.value}</p>
              <p className="text-sm text-gray-500">{result.before.date}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="text-lg font-medium mb-2">Po</h4>
              <p className="text-2xl font-bold text-green-600">{result.after.value}</p>
              <p className="text-sm text-gray-500">{result.after.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}