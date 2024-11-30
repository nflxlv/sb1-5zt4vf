export default function MedicalDisclaimer() {
  return (
    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Ważne informacje medyczne
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Glukofin jest suplementem diety i nie może zastąpić zrównoważonej diety ani przepisanych leków.
              Przed rozpoczęciem stosowania skonsultuj się z lekarzem, szczególnie jeśli:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Przyjmujesz leki na cukrzycę</li>
              <li>Masz problemy z wątrobą lub nerkami</li>
              <li>Jesteś w ciąży lub karmisz piersią</li>
              <li>Masz zaplanowany zabieg chirurgiczny</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}