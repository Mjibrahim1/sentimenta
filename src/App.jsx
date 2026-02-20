import { useState } from 'react';
import Hero from './components/Hero';
import InputForm from './components/InputForm';
import Results from './components/Results';
import ExampleButtons from './components/ExampleButtons';
import About from './components/About';
import { mockAnalyze } from './mockApi';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to analyze.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const data = await mockAnalyze(inputText);
      setResult(data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Hero />
        
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">
          <InputForm
            inputText={inputText}
            setInputText={setInputText}
            handleAnalyze={handleAnalyze}
            loading={loading}
            error={error}
          />
          
          {result && <Results result={result} />}
        </div>

        <ExampleButtons setInputText={setInputText} />

        <About />
      </div>
    </div>
  );
}

export default App;