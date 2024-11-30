export default function DefinitionBox({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-green-600">
      <dt className="text-lg font-semibold text-gray-900">{term}</dt>
      <dd className="mt-2 text-gray-600">{definition}</dd>
    </div>
  );
}