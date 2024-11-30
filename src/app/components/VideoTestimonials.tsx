'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(0)
  
  const testimonials = [
    {
      name: "Anna K.",
      title: "Historia sukcesu",
      description: "Po 3 miesiącach stosowania Glukofinu mój poziom cukru spadł ze 180 do 120 mg/dL",
      videoId: "VIDEO_ID_1"
    },
    {
      name: "Marek N.",
      title: "Moja droga do zdrowia",
      description: "Glukofin pomógł mi ustabilizować poziom cukru",
      videoId: "VIDEO_ID_2"
    }
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Historie sukcesu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${testimonial.videoId}`}
                  title={testimonial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
              <p className="text-gray-600 mb-2">{testimonial.description}</p>
              <p className="text-sm text-gray-500">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}