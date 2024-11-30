'use client'

import { useState, useEffect } from 'react'

export function LimitedTimeOffer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-yellow-50 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
        Oferta ograniczona czasowo!
      </h3>
      
      <div className="flex justify-center space-x-4 mb-4">
        <div className="bg-yellow-800 text-white px-3 py-2 rounded-lg">
          <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs">godzin</div>
        </div>
        <div className="bg-yellow-800 text-white px-3 py-2 rounded-lg">
          <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs">minut</div>
        </div>
        <div className="bg-yellow-800 text-white px-3 py-2 rounded-lg">
          <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs">sekund</div>
        </div>
      </div>

      <div className="text-center text-yellow-800">
        <p className="font-semibold">Tylko teraz Glukofin w cenie 3.98 PLN!</p>
        <p className="text-sm">Normalna cena: 159 PLN</p>
      </div>
    </div>
  )
}