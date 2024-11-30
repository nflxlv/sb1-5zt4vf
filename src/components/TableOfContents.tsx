'use client'

import { useState, useEffect } from 'react'

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'overview', title: 'Przegląd produktu' },
    { id: 'benefits', title: 'Korzyści' },
    { id: 'research', title: 'Badania naukowe' },
    { id: 'ingredients', title: 'Składniki' },
    { id: 'comparison', title: 'Porównanie' },
    { id: 'how-to-use', title: 'Jak stosować' },
    { id: 'results', title: 'Rezultaty' },
    { id: 'reviews', title: 'Opinie' },
    { id: 'experts', title: 'Opinie ekspertów' },
    { id: 'safety', title: 'Bezpieczeństwo' },
    { id: 'faq', title: 'FAQ' },
    { id: 'pricing', title: 'Ceny regionalne' },
    { id: 'research-papers', title: 'Publikacje naukowe' },
    { id: 'medical-info', title: 'Informacje medyczne' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="bg-white rounded-lg shadow-sm p-4" aria-label="Spis treści">
      <h2 className="text-lg font-semibold mb-4">Spis treści</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block py-1 transition-colors ${
                activeSection === section.id
                  ? 'text-green-600 font-medium'
                  : 'text-gray-600 hover:text-green-600'
              }`}
              aria-current={activeSection === section.id ? 'true' : undefined}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}