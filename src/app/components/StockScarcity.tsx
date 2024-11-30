'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function StockScarcity() {
  const [stock, setStock] = useState(27)
  const [recentBuyers, setRecentBuyers] = useState([
    { name: 'Anna K.', time: '2 minuty temu' },
    { name: 'Marek W.', time: '5 minut temu' },
    { name: 'Ewa S.', time: '8 minut temu' }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStock(prev => Math.max(prev - 1, 5))
    }, 300000) // Decrease stock every 5 minutes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-red-50 p-4 rounded-lg mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-red-600 font-semibold">
          Uwaga: Zostało tylko {stock} sztuk w magazynie!
        </div>
        <div className="text-sm text-gray-500">
          Aktualizacja: przed chwilą
        </div>
      </div>

      <div className="space-y-2">
        {recentBuyers.map((buyer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-sm text-gray-600"
          >
            {buyer.name} zakupił(a) Glukofin • {buyer.time}
          </motion.div>
        ))}
      </div>
    </div>
  )
}