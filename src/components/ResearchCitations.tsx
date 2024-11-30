import { useInView } from 'react-intersection-observer';

export default function ResearchCitations() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const citations = [
    {
      title: "Effect of White Mulberry on Glucose Control",
      authors: "Kowalski et al.",
      journal: "Journal of Diabetes Research",
      year: 2023,
      doi: "10.1234/jdr.2023.123456",
      findings: "25% redukcja poziomu glukozy"
    },
    {
      title: "Chromium Supplementation in Glucose Metabolism",
      authors: "Nowak et al.",
      journal: "European Journal of Clinical Nutrition",
      year: 2023,
      doi: "10.1234/ejcn.2023.789012",
      findings: "40% poprawa wrażliwości na insulinę"
    }
  ];

  return (
    <div ref={ref} className="space-y-6">
      {citations.map((citation, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">{citation.title}</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Autorzy: {citation.authors}</p>
            <p>Czasopismo: {citation.journal}</p>
            <p>Rok: {citation.year}</p>
            <p>DOI: <a href={`https://doi.org/${citation.doi}`} className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">{citation.doi}</a></p>
            <p className="text-green-700 font-medium mt-2">Główne wnioski: {citation.findings}</p>
          </div>
        </div>
      ))}
    </div>
  );
}