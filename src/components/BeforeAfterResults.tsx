'use client'

import Image from 'next/image'
import { useState } from 'react'

type ResultPeriod = '2weeks' | '1month' | '3months'

interface ResultData {
  before: string
  after: string
  testimony: string
}

type Results = {
  [K in ResultPeriod]: ResultData
}

export function BeforeAfterResults() {
  const [activeTab, setActiveTab] = useState<ResultPeriod>('2weeks')

  const results: Results = {
    '2weeks': {
      before: 'Poziom cukru: 180 mg/dL',
      after: 'Poziom cukru: 140 mg/dL',
      testimony: 'Po 2 tygodniach zauważyłam znaczną poprawę - Anna K.'
    },
    '1month': {
      before: 'Poziom cukru: 175 mg/dL',
      after: 'Poziom cukru: 120 mg/dL',
      testimony: 'Po miesiącu mój poziom cukru się ustabilizował - Marek N.'
    },
    '3months': {
      before: 'Poziom cukru: 190 mg/dL',
      after: 'Poziom cukru: 110 mg/dL',
      testimony: 'Trzy miesiące stosowania zmieniły moje życie - Barbara W.'
    }
  }

  return (
    <section id="results" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Rezultaty stosowania</h2>
        
        <div className="flex justify-center space-x-4 mb-8">
          {(Object.keys(results) as ResultPeriod[]).map((period) => (
            <button
              key={period}
              onClick={() => setActiveTab(period)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === period
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {period === '2weeks' ? '2 tygodnie' : period === '1month' ? '1 miesiąc' : '3 miesiące'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Przed rozpoczęciem</h3>
            <p className="text-lg">{results[activeTab].before}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Po zastosowaniu</h3>
            <p className="text-lg">{results[activeTab].after}</p>
          </div>
        </div>

        <blockquote className="mt-8 text-center text-lg italic text-gray-600">
          "{results[activeTab].testimony}"
        </blockquote>
      </div>
    </section>
  )
}