export default function RegionalCertifications() {
  const certifications = [
    {
      region: "Polska",
      certificates: [
        "GMP - Good Manufacturing Practice",
        "ISO 9001:2015",
        "HACCP",
        "Certyfikat Jakości PZH"
      ]
    },
    {
      region: "Unia Europejska",
      certificates: [
        "European Food Safety Authority (EFSA)",
        "EU Organic Certification",
        "CE Mark"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {certifications.map((cert, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">{cert.region}</h3>
          <ul className="space-y-2">
            {cert.certificates.map((certificate, idx) => (
              <li key={idx} className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {certificate}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}