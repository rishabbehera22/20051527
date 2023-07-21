import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [urls, setUrls] = useState('');
  const [numbers, setNumbers] = useState([]);

  const handleFetchNumbers = async () => {
    try {
      const response = await axios.get(`/numbers?url=${urls}`);
      setNumbers(response.data.numbers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Number Management App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter URLs separated by commas"
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
        />
        <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      </div>
      <div>
        {numbers.length > 0 ? (
          <ul>
            {numbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        ) : (
          <p>No numbers found</p>
        )}
      </div>
    </div>
  );
};

export default App;
