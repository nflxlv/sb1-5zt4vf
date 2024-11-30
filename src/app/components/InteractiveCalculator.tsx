'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function InteractiveCalculator() {
  const [currentLevel, setCurrentLevel] = useState('')
  const [weeks, setWeeks] = useState('4')
  const [result, setResult] = useState<number | null>(null)

  const calculateProjectedLevel = () => {
    const initial = parseFloat(currentLevel)
    if (!isNaN(initial)) {
      const reduction = initial * 0.25 * (parseInt(weeks) / 8)
      setResult(Math.round(initial - reduction))
    }
  }

  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-6">Kalkulator poziomu cukru</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Obecny poziom cukru (mg/dL)
          </label>
          <input
            type="number"
            value={currentLevel}
            onChange={(e) => setCurrentLevel(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="np. 180"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Planowany okres stosowania (tygodnie)
          </label>
          <select
            value={weeks}
            onChange={(e) => setWeeks(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="2">2 tygodnie</option>
            <option value="4">4 tygodnie</option>
            <option value="8">8 tygodni</option>
          </select>
        </div>
        <button
          onClick={calculateProjectedLevel}
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Oblicz przewidywany poziom
        </button>
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-50 rounded-md"
          >
            <p className="text-center">
              Przewidywany poziom po {weeks} tygodniach:
              <span className="block text-2xl font-bold text-green-700 mt-2">
                {result} mg/dL
              </span>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}