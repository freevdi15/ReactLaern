import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter email of the user');

  // Function to handle changes in the email input field
  const handleEmailChange = (event) => {
    console.log("Email input changed");

    setText(event.target.value); // Update the state with the uppercase value
  };

  // Function to handle the button click
  const handleUpdateClick = () => {
    console.log("Update button clicked");
    let upperText = text.toUpperCase();
    setText(upperText); // Update the state with the uppercase value
  }

  return (
    <div>
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
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea 
          className="form-control" 
          id="exampleFormControlTextarea1" 
          rows="3"
        ></textarea>
      </div>
      <button 
        className="btn" 
        style={{ backgroundColor: 'blue', color: 'white' }}
        onClick={handleUpdateClick} // Trigger the function on button click
      >
        Submit
      </button>
    </div>
  );
}
