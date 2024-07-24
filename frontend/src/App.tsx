import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define types for state variables
type Data = string | null;
type Error = string | null;

const App: React.FC = () => {
  const [data, setData] = useState<Data>(null);
  const [error, setError] = useState<Error>(null);

  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get<string>('http://localhost:3001/');
        setData(response.data);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      }
    };

    // Call the asynchronous function
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        {data && <p>Data from backend: {data}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
    </div>
  );
};

export default App;
