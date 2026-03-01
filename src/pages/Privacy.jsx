import React from "react";

const Privacy = () => {
  return (
    <div>

      {/* Hero Header Start */}
      <div
        className="container-fluid py-5 mb-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.pinimg.com/736x/06/3f/34/063f3496af5de95a3026f705be34d287.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "350px",
          display: "flex",
          
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">

              <h1 className="display-3 text-white mb-3">
                Privacy Policy
              </h1>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">

                  <li className="breadcrumb-item">
                    <a className="text-white text-decoration-none" href="/">
                      Home
                    </a>
                  </li>

                  <li className="breadcrumb-item text-white active">
                    Privacy Policy
                  </li>

                </ol>
              </nav>

            </div>
          </div>
        </div>
      </div>
      {/* Hero Header End */}



      {/* Privacy Content Start */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h2 className="mb-4">Privacy Policy</h2>

            {[
              {
                title: "1. Information We Collect",
                text: "We collect personal details such as your name, phone number, email address, pickup and drop locations, and travel itinerary when you book with Urbaniasechalo. Technical information such as IP address and browser type may also be collected.",
              },
              {
                title: "2. How We Use Your Information",
                text: "Your information is used to process bookings, assign drivers, provide trip updates, and improve our services.",
              },
              {
                title: "3. Sharing of Information",
                text: "We do not sell your personal data. Information may only be shared when legally required or to provide services.",
              },
              {
                title: "4. Cookies",
                text: "We use cookies to improve website performance and user experience.",
              },
              {
                title: "5. Data Security",
                text: "We implement security measures to protect your personal data.",
              },
              {
                title: "6. Contact Us",
                text: "Email: support@urbaniasechalo.com | Phone: +91 9915243111",
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

          </div>
        </div>
      </div>
      {/* Privacy Content End */}

    </div>
  );
};

export default Privacy;