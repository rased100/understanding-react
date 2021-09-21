import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';

function App() {
  const [steps, setStepes] = useState(0);
  const handleIncreaseSteps = () => {
    const newSteps = steps + 1;
    setStepes(newSteps);
  }
  useEffect(() => {
    console.log(steps);
  }, [steps])
  return (
    <div className="App">
      <h3>My steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <Device name="phone" steps={steps} price="13500" />
    </div>
  );
}

export default App;
