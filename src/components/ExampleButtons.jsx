const examples = [
  { text: 'This food sweet die!', sentiment: '' },
  { text: 'Na wa for this service, I no happy at all.', sentiment: '' },
  { text: 'I no know wetin happen today.', sentiment: '' },
  { text: 'The guy dey find trouble.', sentiment: '' },
];

export default function ExampleButtons({ setInputText }) {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Try an example:</h3>
      <div className="flex flex-wrap gap-2">
        {examples.map((ex, idx) => (
          <button
            key={idx}
            onClick={() => setInputText(ex.text)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-full transition"
          >
            {ex.text.length > 30 ? ex.text.substring(0, 30) + '…' : ex.text}
          </button>
        ))}
      </div>
    </div>
  );
}