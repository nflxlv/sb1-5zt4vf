import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function DataVisualization() {
  const data = [
    { tydzien: '0', poziom: 180, srednia: 180 },
    { tydzien: '2', poziom: 160, srednia: 165 },
    { tydzien: '4', poziom: 140, srednia: 150 },
    { tydzien: '6', poziom: 120, srednia: 135 },
    { tydzien: '8', poziom: 110, srednia: 120 }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skuteczność potwierdzona danymi</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tydzien" label={{ value: 'Tygodnie stosowania', position: 'bottom' }} />
              <YAxis label={{ value: 'Poziom cukru (mg/dL)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="poziom" stroke="#15803d" name="Poziom cukru" />
              <Line type="monotone" dataKey="srednia" stroke="#9ca3af" name="Średnia grupa" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}