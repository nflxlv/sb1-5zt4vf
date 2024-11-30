'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function DrugInteractionChecker() {
  const [selectedDrugs, setSelectedDrugs] = useState<string[]>([])
  
  const commonDrugs = [
    { name: 'Metformina', interactions: ['Może wzmacniać działanie Glukofinu'] },
    { name: 'Insulina', interactions: ['Może wymagać dostosowania dawki'] },
    { name: 'Glimepiryd', interactions: ['Konsultacja z lekarzem wymagana'] },
    { name: 'Gliklazyd', interactions: ['Możliwe wzmocnienie działania'] }
  ]

  const toggleDrug = (drug: string) => {
    setSelectedDrugs(prev => 
      prev.includes(drug) 
        ? prev.filter(d => d !== drug)
        : [...prev, drug]
    )
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Sprawdź interakcje lekowe</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Wybierz przyjmowane leki:</h3>
          <div className="space-y-2">
            {commonDrugs.map(drug => (
              <label key={drug.name} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedDrugs.includes(drug.name)}
                  onChange={() => toggleDrug(drug.name)}
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span>{drug.name}</span>
              </label>
            ))}
          </div>
        </div>

        {selectedDrugs.length > 0 && (
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Potencjalne interakcje:</h3>
            <ul className="space-y-2">
              {selectedDrugs.map(drug => (
                <li key={drug}>
                  <span className="font-medium">{drug}:</span>
                  <ul className="ml-4 mt-1">
                    {commonDrugs.find(d => d.name === drug)?.interactions.map((interaction, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {interaction}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-gray-500">
              * Zawsze skonsultuj się z lekarzem przed łączeniem leków
            </div>
          </div>
        )}
      </div>
    </section>
  )
}