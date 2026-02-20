// Simple keyword-based mock logic to simulate the model
export function mockAnalyze(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lower = text.toLowerCase();
      let sentiment = 'Neutral';
      let positive = 0.1, negative = 0.1, neutral = 0.8;

      // Very basic keyword spotting – replace with your actual model later
      if (lower.includes('sweet') || lower.includes('happy') || lower.includes('good')) {
        sentiment = 'Positive';
        positive = 0.85;
        negative = 0.05;
        neutral = 0.10;
      } else if (lower.includes('wahala') || lower.includes('trouble') || lower.includes('no happy') || lower.includes('die')) {
        sentiment = 'Negative';
        positive = 0.05;
        negative = 0.90;
        neutral = 0.05;
      } else if (lower.includes('know') || lower.includes('maybe') || lower.includes('think')) {
        sentiment = 'Neutral';
        positive = 0.15;
        negative = 0.10;
        neutral = 0.75;
      }

      // Slight randomization to make it feel realistic
      const confidence = sentiment === 'Positive' ? positive :
                         sentiment === 'Negative' ? negative : neutral;

      resolve({
        sentiment,
        confidence: Number(confidence.toFixed(2)),
        confidence_scores: {
          positive: Number(positive.toFixed(2)),
          negative: Number(negative.toFixed(2)),
          neutral: Number(neutral.toFixed(2)),
        },
      });
    }, 800); // simulate network delay
  });
}