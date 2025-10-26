import './App.css';
import About from './components/about';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

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
    setTimeout(() => setAlert(null), 2000); // Auto-dismiss alert after 2 seconds
  };

  const dismissAlert = () => {
    setAlert(null); // Clear the alert
  };

  return (
    <Router>
      <NavBar title="BeRealEstate" aboutText="Know more about the team" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} dismissAlert={dismissAlert} /> {/* Pass dismissAlert as a prop */}
      <div className="container my-4">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter your details" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
