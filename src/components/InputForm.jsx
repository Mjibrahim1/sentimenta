export default function InputForm({ inputText, setInputText, handleAnalyze, loading, error }) {
  return (
    <div>
      <textarea
        rows="4"
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Type or paste Nigerian Pidgin sentence here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Analyzing...' : 'Analyze Sentiment'}
      </button>
    </div>
  );
}