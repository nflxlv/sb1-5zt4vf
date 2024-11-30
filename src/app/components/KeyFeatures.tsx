'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function KeyFeatures() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      title: "Naturalne składniki",
      description: "100% składników pochodzenia naturalnego",
      icon: "🌿"
    },
    {
      title: "Potwierdzona skuteczność",
      description: "87% pacjentów potwierdza działanie",
      icon: "✓"
    },
    {
      title: "Szybkie efekty",
      description: "Pierwsze rezultaty po 14 dniach",
      icon: "⚡"
    },
    {
      title: "Bezpieczne stosowanie",
      description: "Brak skutków ubocznych",
      icon: "🛡️"
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
          <h2 className="text-3xl font-bold text-center mb-12">Dlaczego warto wybrać Glukofin?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">Kluczowe informacje</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Skład:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Morwa biała (40%)</li>
                  <li>Chrom (30%)</li>
                  <li>Cynamon (20%)</li>
                  <li>Inne naturalne składniki (10%)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Efekty:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Obniżenie poziomu cukru</li>
                  <li>Poprawa metabolizmu</li>
                  <li>Redukcja apetytu na słodycze</li>
                  <li>Więcej energii</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}