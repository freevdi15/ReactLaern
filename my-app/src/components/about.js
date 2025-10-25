import React, { useState } from 'react';

export default function About() {
  const [isOn, setIsOn] = useState(false); // State to toggle between "On" and "Off"

  // Function to handle button click
  const handleToggle = () => {
    setIsOn(!isOn); // Toggle the state
  };
  let myStyle = {
    color: isOn ? 'white' : 'black',
    backgroundColor: isOn ? 'black' : 'white',
    border: '1px solid',
    borderColor: isOn ? 'white' : 'black',
  };

  return (
    <div className="container my-4" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="aboutAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              Our mission is to provide the best services and resources to our users, ensuring a seamless and enjoyable experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Our Team
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              Our team is composed of dedicated professionals who work tirelessly to ensure the best experience for our users.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              If you have any questions or feedback, feel free to reach out to us at contact@example.com. We value your input!
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary my-3"
        style={{
          transform: isOn ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.2s ease-in-out',
        }}
        onClick={handleToggle}
      >
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}