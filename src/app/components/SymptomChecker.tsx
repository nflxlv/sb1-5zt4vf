'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  const symptoms = {
    early: [
      'Zwiększone pragnienie',
      'Częste oddawanie moczu',
      'Zmęczenie',
      'Suchość w ustach'
    ],
    medium: [
      'Zaburzenia widzenia',
      'Wolniejsze gojenie ran',
      'Częste infekcje',
      'Drażliwość'
    ],
    severe: [
      'Nudności i wymioty',
      'Bóle brzucha',
      'Dezorientacja',
      'Utrata przytomności'
    ]
  }

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    )
  }

  const getRiskLevel = () => {
    const count = selectedSymptoms.length
    if (count >= 6) return { level: 'Wysokie', color: 'text-red-600' }
    if (count >= 3) return { level: 'Średnie', color: 'text-yellow-600' }
    if (count > 0) return { level: 'Niskie', color: 'text-green-600' }
    return { level: 'Brak', color: 'text-gray-600' }
  }

  return (
    <section className="bg-white p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-6">Sprawdź objawy wysokiego cukru</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(symptoms).map(([stage, list], index) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <h3 className="font-semibold mb-3">
              {stage === 'early' ? 'Objawy wczesne' :
               stage === 'medium' ? 'Objawy średniozaawansowane' :
               'Objawy poważne'}
            </h3>
            <div className="space-y-2">
              {list.map(symptom => (
                <label key={symptom} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={() => handleSymptomToggle(symptom)}
                    className="rounded text-green-600 focus:ring-green-500"
                  />
                  <span>{symptom}</span>
                </label>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedSymptoms.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-green-50 rounded-lg"
        >
          <h3 className="font-semibold mb-2">Wynik analizy</h3>
          <p className="mb-2">
            Poziom ryzyka: <span className={getRiskLevel().color}>{getRiskLevel().level}</span>
          </p>
          <p className="text-sm text-gray-600">
            * To jest tylko orientacyjna ocena. W przypadku niepokojących objawów skonsultuj się z lekarzem.
          </p>
        </motion.div>
      )}
    </section>
  )
}