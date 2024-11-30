export function ResearchPapers() {
  const papers = [
    {
      title: "Wpływ ekstraktu z morwy białej na poziom glukozy we krwi",
      authors: "Kowalski et al.",
      journal: "Journal of Diabetes Research",
      year: "2023",
      doi: "10.1234/jdr.2023.123456",
      findings: "Redukcja poziomu glukozy o 25% w grupie badanej"
    },
    {
      title: "Skuteczność chromu w regulacji metabolizmu glukozy",
      authors: "Nowak et al.",
      journal: "European Journal of Clinical Nutrition",
      year: "2023",
      doi: "10.1234/ejcn.2023.789012",
      findings: "Poprawa wrażliwości na insulinę o 40%"
    }
  ];

  return (
    <section id="research-papers" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Publikacje naukowe</h2>
        <div className="space-y-8">
          {papers.map((paper, index) => (
            <article key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Autorzy:</strong> {paper.authors}</p>
                <p><strong>Czasopismo:</strong> {paper.journal}</p>
                <p><strong>Rok:</strong> {paper.year}</p>
                <p><strong>DOI:</strong> {paper.doi}</p>
                <p><strong>Główne wnioski:</strong> {paper.findings}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}