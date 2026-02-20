export default function About() {
  return (
    <div className="mt-12 p-6 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">About the Model</h2>
      <p className="text-gray-700">
        Fine-tuned <strong>AfriBERTa</strong> on the{' '}
        <a
          href="https://github.com/afrisenti-semeval/afrisenti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          AfriSenti dataset
        </a>{' '}
        (~10,500 tweets).
      </p>
      <p className="text-gray-700 mt-2">
        <strong>Challenges addressed:</strong> non‑standard orthography (e.g. "wahala" vs "wahalla"),
        code‑mixing, and context understanding (e.g. "This food sweet die" is positive, while "The man don die" is negative).
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div className="bg-green-50 p-3 rounded">
          <p className="text-sm text-gray-600">Accuracy</p>
          <p className="text-2xl font-bold text-green-700">~88%</p>
        </div>
        <div className="bg-blue-50 p-3 rounded">
          <p className="text-sm text-gray-600">Weighted F1‑Score</p>
          <p className="text-2xl font-bold text-blue-700">~86%</p>
        </div>
      </div>
    </div>
  );
}