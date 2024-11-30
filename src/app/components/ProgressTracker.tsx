'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Line } from 'recharts'

interface Reading {
  date: string;
  value: number;
}

export function ProgressTracker() {
  const [readings, setReadings] = useState<Reading[]>([])
  const [currentReading, setCurrentReading] = useState('')
  const [date, setDate] = useState('')

  const addReading = () => {
    if (currentReading && date) {
      setReadings([...readings, {
        date,
        value: parseInt(currentReading)
      }])
      setCurrentReading('')
      setDate('')
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Śledzenie poziomu cukru</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Poziom cukru (mg/dL)
          </label>
          <input
            type="number"
            value={currentReading}
            onChange={(e) => setCurrentReading(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data pomiaru
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
      </div>

      <button
        onClick={addReading}
        className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors mb-8"
      >
        Dodaj pomiar
      </button>

      {readings.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Historia pomiarów</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Poziom cukru
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {readings.map((reading, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {reading.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {reading.value} mg/dL
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        reading.value < 70 ? 'bg-red-100 text-red-800' :
                        reading.value > 140 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {reading.value < 70 ? 'Za niski' :
                         reading.value > 140 ? 'Za wysoki' :
                         'Prawidłowy'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}