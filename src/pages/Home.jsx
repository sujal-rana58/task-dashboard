import { useState, useEffect } from 'react'; //

export default function Home() {
  // State for advice string and loading status
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the Advice Slip API
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
        // Extract advice from the specific API response format
        setAdvice(data.slip.advice);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching advice:", err);
        setLoading(false);
      });
  }, []); // Run once on mount

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to Task Dashboard
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl border-t-4 border-blue-500">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Daily Advice
        </h2>
        
        {/* Conditional rendering based on loading state */}
        {loading ? (
          <p className="text-gray-500 animate-pulse">Loading...</p>
        ) : (
          <p className="text-lg text-gray-600 italic">"{advice}"</p>
        )}
      </div>
    </div>
  );
}