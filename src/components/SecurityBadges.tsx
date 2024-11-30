export default function SecurityBadges() {
  const badges = [
    {
      name: "SSL Secure",
      icon: "🔒",
      description: "Szyfrowane połączenie SSL"
    },
    {
      name: "RODO Compliance",
      icon: "🛡️",
      description: "Zgodność z RODO"
    },
    {
      name: "Safe Payments",
      icon: "💳",
      description: "Bezpieczne płatności"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {badges.map((badge, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="text-4xl mb-4">{badge.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{badge.name}</h3>
          <p className="text-gray-600 text-sm">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}