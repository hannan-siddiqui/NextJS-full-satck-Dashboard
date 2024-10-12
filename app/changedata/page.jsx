"use client"
import { useState } from 'react';

const CreateDashboardEntry = () => {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [C, setC] = useState('');
  const [D, setD] = useState('');
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const parsedA = parseInt(A, 10);
    const parsedB = parseInt(B, 10);
    const parsedC = parseInt(C, 10);
    const parsedD = parseInt(D, 10);

    if (isNaN(parsedA) || isNaN(parsedB) || isNaN(parsedC) || isNaN(parsedD)) {
      setError('All fields must be valid integers');
      return;
    }
  
    try {
      const response = await fetch('/api/createDashboardEntry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ A: parsedA, B: parsedB, C: parsedC, D: parsedD }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
  
      const result = await response.json();
      setSuccess('Data inserted successfully!');
      setA('');
      setB('');
      setC('');
      setD('');
    } catch (err) {
      console.log('Error:', err);
      setError('Failed to submit data');
    }
  };
  

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create Dashboard Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">A</label>
          <input
            type="number"
            value={A}
            onChange={(e) => setA(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">B</label>
          <input
            type="number"
            value={B}
            onChange={(e) => setB(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">C</label>
          <input
            type="number"
            value={C}
            onChange={(e) => setC(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">D</label>
          <input
            type="number"
            value={D}
            onChange={(e) => setD(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default CreateDashboardEntry;
