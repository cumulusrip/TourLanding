import React from "react";

const Terms = () => {
  return (
    <div>

      {/* Hero Header Start */}
      <div className="position-relative overflow-hidden mb-5" style={{ minHeight: "400px" }}>
        
        {/* Rotated Background */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "-50px",
            width: "120%",
            height: "120%",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.pinimg.com/474x/f8/04/64/f80464e4f605e7e58a6e80aad47b8623.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // transform: "rotate(-3deg)",
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <div
          className="container position-relative text-center text-white d-flex flex-column justify-content-center"
          style={{ minHeight: "400px", zIndex: 2 }}
        >
          <h1 className="display-3 mb-3 text-white">
            Terms & Conditions
          </h1>

          <nav>
            <ol className="breadcrumb justify-content-center">
              
              <li className="breadcrumb-item">
                <a className="text-white text-decoration-none" href="/">
                  Home
                </a>
              </li>

              <li className="breadcrumb-item text-white active">
                Terms & Conditions
              </li>

            </ol>
          </nav>

        </div>

      </div>
      {/* Hero Header End */}



      {/* Terms Content Start */}
      <div className="container py-5">
        <div className="col-lg-10 mx-auto">

          <h2 className="mb-4">Terms & Conditions</h2>

          {[
            {
              title: "1. About Us",
              text: "Urbania Se Chalo provides safe, reliable, and comfortable taxi services across Chandigarh and surrounding destinations.",
            },
            {
              title: "2. Booking & Confirmation",
              text: "Bookings are confirmed only after confirmation and required advance payment.",
            },
            {
              title: "3. Pricing & Payments",
              text: "Pricing depends on vehicle type, distance, tolls, and travel duration.",
            },
            {
              title: "4. Cancellations & Refunds",
              text: "Refund eligibility depends on cancellation timing and service conditions.",
            },
            {
              title: "5. Use of Vehicle",
              text: "Passengers must not carry illegal items or damage the vehicle.",
            },
            {
              title: "6. Travel Conditions",
              text: "We are not responsible for delays due to traffic, weather, or government restrictions.",
            },
            {
              title: "7. Passenger Belongings",
              text: "We are not responsible for lost personal belongings.",
            },
            {
              title: "8. Limitation of Liability",
              text: "Our liability is limited to the booking amount paid.",
            },
            {
              title: "9. Changes to Terms",
              text: "Terms may be updated anytime without prior notice.",
            },
          ].map((item, index) => (
            <div key={index} className="mb-4">

              <h5 className="text-primary">
                {item.title}
              </h5>

              <p className="text-muted">
                {item.text}
              </p>

            </div>
          ))}

          <div className="mt-4">
            <h5 className="text-primary">10. Contact Us</h5>

            <p className="text-muted">
              Phone: +91 9915243111 <br />
              Email: support@urbaniasechalo.com
            </p>
          </div>

        </div>
      </div>
      {/* Terms Content End */}

    </div>
  );
};

export default Terms;