import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  // Function to handle changes in the email input field
  const handleEmailChange = (event) => {
    setText(event.target.value); // Update the state with the user-entered value
  };

  // Function to handle the button click
  const handleUpdateClick = () => {
    setText(text.toUpperCase()); // Update the state with the uppercase value
  };

  // Function to copy the email to the clipboard
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text); // Copy the text to the clipboard
    alert("Copied to clipboard: " + text); // Alert the user
  };

  return (
    <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your email"
          value={text} // Bind the input value to the state
          onChange={handleEmailChange} // Update state on user input
          style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        />
      </div>
      <button
        className="btn"
        style={{ backgroundColor: 'blue', color: 'white', marginRight: '10px' }}
        onClick={handleUpdateClick} // Trigger the function on button click
      >
        Submit
      </button>
      <button
        className="btn btn-secondary"
        onClick={handleCopyClick} // Trigger the copy function on button click
      >
        Copy
      </button>
      <div className="container my-3">
        <h2>Your text Summary:</h2>
        <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
      </div>
    </div>
  );
}
