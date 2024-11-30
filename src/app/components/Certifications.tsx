export function Certifications() {
  const certifications = [
    {
      name: 'GMP',
      description: 'Good Manufacturing Practice',
      icon: '🏭'
    },
    {
      name: 'ISO 9001:2015',
      description: 'System Zarządzania Jakością',
      icon: '✓'
    },
    {
      name: 'HACCP',
      description: 'Bezpieczeństwo Produkcji',
      icon: '🛡️'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Certyfikaty i Gwarancje</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">100% Gwarancja Satysfakcji</h3>
          <p className="text-lg text-gray-700">
            Jeśli nie będziesz zadowolony z rezultatów, zwrócimy Ci pieniądze w ciągu 30 dni.
          </p>
        </div>
      </div>
    </section>
  );
}