export default function ResearchSection() {
  return (
    <section id="research" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Badania kliniczne</h2>
        <div className="prose prose-lg mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">Skuteczność potwierdzona naukowo</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Badanie kliniczne na grupie 200 pacjentów</li>
              <li>87% uczestników zaobserwowało poprawę</li>
              <li>Brak znaczących skutków ubocznych</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Składniki przebadane klinicznie</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ekstrakt z morwy białej - 45 badań klinicznych</li>
              <li>Chrom - 23 badania potwierdzające skuteczność</li>
              <li>Cynamon - 18 badań klinicznych</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}