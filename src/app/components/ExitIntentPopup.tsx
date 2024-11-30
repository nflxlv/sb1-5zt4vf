'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsVisible(false)}
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold text-center mb-4">
              Zaczekaj!
            </h2>
            
            <p className="text-center text-gray-600 mb-6">
              Tylko teraz specjalna oferta - Glukofin w promocyjnej cenie 3.98 PLN!
            </p>

            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-green-600">3.98 PLN</div>
              <div className="text-sm text-gray-500">Normalna cena: 159 PLN</div>
            </div>

            <div className="space-y-4">
              <a
                href="https://1z1vt.doctortrf.com/l"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Skorzystaj z promocji
              </a>
              
              <button
                onClick={() => setIsVisible(false)}
                className="block w-full text-gray-500 text-sm text-center"
              >
                Nie, dziękuję
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}