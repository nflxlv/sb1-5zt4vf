'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function StatisticalData() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const data = [
    { tydzien: '0', poziom: 180, srednia: 180 },
    { tydzien: '2', poziom: 160, srednia: 165 },
    { tydzien: '4', poziom: 140, srednia: 150 },
    { tydzien: '6', poziom: 120, srednia: 135 },
    { tydzien: '8', poziom: 110, srednia: 120 }
  ]

  const stats = [
    {
      value: 87,
      label: "Skuteczność",
      suffix: "%",
      description: "pacjentów potwierdza działanie"
    },
    {
      value: 14,
      label: "Szybkość",
      suffix: " dni",
      description: "do pierwszych efektów"
    },
    {
      value: 25,
      label: "Redukcja",
      suffix: "%",
      description: "średni spadek poziomu cukru"
    }
  ]

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Potwierdzona skuteczność</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">Średni poziom cukru w czasie stosowania</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="tydzien" label={{ value: 'Tygodnie stosowania', position: 'bottom' }} />
                  <YAxis label={{ value: 'Poziom cukru (mg/dL)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="poziom" 
                    stroke="#15803d" 
                    name="Poziom cukru" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="srednia" 
                    stroke="#9ca3af" 
                    name="Średnia grupa" 
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}