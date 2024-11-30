'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ScienceExplainer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const sections = [
    {
      title: "Morwa Biała",
      content: "Zawiera związki aktywne hamujące rozkład węglowodanów złożonych do glukozy.",
      benefits: [
        "Spowalnia wchłanianie cukrów",
        "Zmniejsza wahania glikemii",
        "Wspiera metabolizm glukozy"
      ]
    },
    {
      title: "Chrom",
      content: "Pierwiastek śladowy kluczowy dla metabolizmu węglowodanów.",
      benefits: [
        "Zwiększa wrażliwość na insulinę",
        "Wspomaga transport glukozy",
        "Reguluje apetyt na słodycze"
      ]
    },
    {
      title: "Cynamon",
      content: "Zawiera związki o działaniu insulinomimetycznym.",
      benefits: [
        "Naśladuje działanie insuliny",
        "Poprawia metabolizm glukozy",
        "Ma właściwości przeciwzapalne"
      ]
    }
  ]

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Jak działa Glukofin?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.content}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {section.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Synergia składników
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Połączenie tych trzech składników tworzy kompleksowe rozwiązanie,
              które nie tylko obniża poziom cukru, ale także wspiera ogólny
              metabolizm organizmu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}