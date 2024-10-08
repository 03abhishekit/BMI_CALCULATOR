import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let reload = () => {
    window.location.reload();
  };

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert(`Please enter a valid weight and height`);
    } else {
      // Convert height from cm to meters
      let heightInMeters = height / 100;
      let bmi = (weight / (heightInMeters * heightInMeters));
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are in a healthy range");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>

          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn">Calculate</button>
            <button type="button" className="btn btn-outline" onClick={reload}>Reload</button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

