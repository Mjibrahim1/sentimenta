import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sentimentColors = {
  psitive: 'text-green-600',
  negative: 'text-red-600',
  neutral: 'text-yellow-600',
};

export default function Results({ result }) {
  const { sentiment, confidence, scores } = result;
  const percentage = (confidence * 100).toFixed(1);

  const chartData = [
    { name: 'Positive', score: scores.positive },
    { name: 'Negative', score: scores.negative },
    { name: 'Neutral', score: scores.neutral },
  ];

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Analysis Result</h2>
      <div className="flex items-center justify-between">
        <p className="text-lg">
          Sentiment:{' '}
          <span className={`font-bold ${sentimentColors[sentiment]}`}>
            {sentiment}
          </span>
        </p>
        <p className="text-lg">
          Confidence: <span className="font-bold">{percentage}%</span>
        </p>
      </div>

      <div className="mt-6 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 1]} tickFormatter={(tick) => `${(tick * 100).toFixed(0)}%`} />
            <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
            <Bar dataKey="score" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}