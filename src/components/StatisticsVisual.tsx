import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function StatisticsVisual() {
  const data = [
    { name: 'Tydzień 1', poziom: 180 },
    { name: 'Tydzień 2', poziom: 160 },
    { name: 'Tydzień 3', poziom: 140 },
    { name: 'Tydzień 4', poziom: 120 }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Statystyki Skuteczności</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="poziom" fill="#15803d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-700">87%</h3>
            <p className="text-gray-600">Skuteczność</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-700">14 dni</h3>
            <p className="text-gray-600">Pierwsze efekty</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-700">25%</h3>
            <p className="text-gray-600">Średnia poprawa</p>
          </div>
        </div>
      </div>
    </section>
  );
}