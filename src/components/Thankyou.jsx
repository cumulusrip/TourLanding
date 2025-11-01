import React from "react";


const ThankYou = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-5 rounded shadow bg-white">
        <div className="mb-4">
          <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "4rem" }}></i>
        </div>
        <h1 className="fw-bold mb-3">Thank You!</h1>
        <p className="text-muted fs-5">
          Thank you for booking with <strong>Urbania Se Chalo</strong>.<br />
          We’ll reach out to you soon to confirm your trip details.
        </p>
        <a href="/" className="btn btn-primary mt-4">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
