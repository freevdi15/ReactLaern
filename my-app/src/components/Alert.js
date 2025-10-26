import React, { useEffect } from 'react';

export default function Alert({ alert, dismissAlert }) {
  const capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        dismissAlert(); // Call the dismiss function passed as a prop
      }, 2000); // 2-second timeout

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [alert, dismissAlert]); // Include specific dependencies

  return (
    alert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(alert.type)}:</strong> {alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={dismissAlert} // Manually dismiss the alert when the close button is clicked
        ></button>
      </div>
    )
  );
}