'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function StickyNavigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', label: 'Przegląd' },
    { id: 'ingredients', label: 'Składniki' },
    { id: 'benefits', label: 'Korzyści' },
    { id: 'research', label: 'Badania' },
    { id: 'reviews', label: 'Opinie' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isSticky ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
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
                className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600"
              >
                {section.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}