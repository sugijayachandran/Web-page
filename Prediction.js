import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePrediction = async () => {
    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:3001/predict', {
        inputData: {
          features: [],
          labels: []
        },
      });

      // Update the state with the prediction
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Sonar vs Rock Prediction</h1>
      <label>Enter features (comma-separated): </label>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={handlePrediction}>Predict</button>
      {prediction !== null && (
        <p>
          Prediction: <strong>{prediction}</strong>
        </p>
      )}
    </div>
  );
};

export default App;
