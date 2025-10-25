import React, { useEffect } from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (props.alert) {
      const timer = setTimeout(() => {
        props.dismissAlert(); // Call the dismiss function passed as a prop
      }, 2000); // 2-second timeout


      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [props.alert, props.dismissAlert]);

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={props.dismissAlert} // Manually dismiss the alert when the close button is clicked
        ></button>
      </div>
    )
  );
}