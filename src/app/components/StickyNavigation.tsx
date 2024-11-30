'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export function StickyNavigation() {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'overview', label: 'Przegląd' },
    { id: 'benefits', label: 'Korzyści' },
    { id: 'ingredients', label: 'Składniki' },
    { id: 'results', label: 'Rezultaty' },
    { id: 'research', label: 'Badania' },
    { id: 'reviews', label: 'Opinie' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)

      // Find active section
      const current = sections.find(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${activeSection === section.id 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-gray-700 hover:text-green-600'
                  }`}
              >
                {section.label}
              </Link>
            ))}
          </div>
          
          <a
            href="https://1z1vt.doctortrf.com/l"
            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Kup teraz 3.98 PLN
          </a>
        </div>
      </div>
    </nav>
  )
}