'use client';

import { Link } from 'react-scroll';

export default function JumpToSection() {
  const sections = [
    { id: 'overview', label: 'Przegląd produktu' },
    { id: 'ingredients', label: 'Składniki' },
    { id: 'benefits', label: 'Korzyści' },
    { id: 'research', label: 'Badania' },
    { id: 'reviews', label: 'Opinie' }
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-white rounded-lg shadow-lg p-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block p-2 text-sm text-gray-600 hover:text-green-600 cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-green-600 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}