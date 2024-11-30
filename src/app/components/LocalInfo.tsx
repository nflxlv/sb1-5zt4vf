'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function LocalInfo() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const regions = [
    {
      name: "Polska Centralna",
      delivery: "1-2 dni robocze",
      price: "3.98 PLN",
      shipping: "15.00 PLN",
      availability: "Dostępny"
    },
    {
      name: "Polska Południowa",
      delivery: "1-2 dni robocze",
      price: "3.98 PLN",
      shipping: "15.00 PLN",
      availability: "Dostępny"
    },
    {
      name: "Polska Północna",
      delivery: "2-3 dni robocze",
      price: "3.98 PLN",
      shipping: "15.00 PLN",
      availability: "Dostępny"
    }
  ]

  const shippingMethods = [
    { name: "Kurier DPD", time: "1-2 dni robocze", price: "15.00 PLN" },
    { name: "InPost Paczkomaty", time: "1-2 dni robocze", price: "14.00 PLN" },
    { name: "Poczta Polska", time: "2-3 dni robocze", price: "12.00 PLN" }
  ]

  const paymentMethods = [
    { name: "BLIK", icon: "💳" },
    { name: "Przelewy24", icon: "🏦" },
    { name: "Karty płatnicze", icon: "💳" },
    { name: "Płatność przy odbiorze", icon: "💰" }
  ]

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Dostawa i płatność</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{region.name}</h3>
                <div className="space-y-2">
                  <p className="text-green-600 font-bold text-2xl">{region.price}</p>
                  <p className="text-gray-600">Dostawa: {region.shipping}</p>
                  <p className="text-gray-600">Czas dostawy: {region.delivery}</p>
                  <p className="text-green-600">{region.availability}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Metody dostawy</h3>
              <div className="space-y-4">
                {shippingMethods.map(method => (
                  <div key={method.name} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{method.name}</p>
                      <p className="text-sm text-gray-600">{method.time}</p>
                    </div>
                    <p className="font-semibold">{method.price}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Metody płatności</h3>
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map(method => (
                  <div key={method.name} className="flex items-center space-x-2">
                    <span className="text-2xl">{method.icon}</span>
                    <span>{method.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}