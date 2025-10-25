import './App.css';
import About from './components/about';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark'); // Default mode is dark
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // Dark mode background
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const dismissAlert = () => {
    setAlert(null); // Clear the alert
  };

  return (
    <>
      <NavBar title="BeRealEstate" aboutText="Know more about the team" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} dismissAlert={dismissAlert} /> {/* Pass dismissAlert as a prop */}
      <div className="container my-4">
        <TextForm heading="Enter your details" mode={mode} showAlert={showAlert} />
      </div>
      <About mode={mode} />
    </>
  );
}

export default App;
