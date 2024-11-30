'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function TrustBadges() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const badges = [
    {
      title: 'Certyfikat GMP',
      icon: '🏭',
      description: 'Produkcja zgodna z najwyższymi standardami'
    },
    {
      title: 'ISO 9001:2015',
      icon: '✓',
      description: 'System zarządzania jakością'
    },
    {
      title: 'Bezpieczne płatności',
      icon: '🔒',
      description: 'SSL & PCI DSS Compliance'
    },
    {
      title: '30 dni na zwrot',
      icon: '💰',
      description: 'Gwarancja satysfakcji'
    }
  ]

  return (
    <section className="bg-white py-8 rounded-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h3 className="text-sm font-semibold mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}