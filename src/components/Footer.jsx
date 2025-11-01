import React from 'react'

export default function Footer() {
  return (
    <div>
           {/* Footer Start */}
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Company</h4>
            <a className="btn btn-link" href="/">
              About Us
            </a>
            <a className="btn btn-link" href="/">
              Contact Us
            </a>
            <a className="btn btn-link" href="/">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="/">
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="/">
              FAQs &amp; Help
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
            Plot No.2 Daria Near Railway Station  Chandigarh
            </p>
        <p className="mb-2">
  <i className="fa fa-phone-alt me-3" />
  <a href="tel:+919915243111" className="text-light text-decoration-none">
    +91 9915-243-111
  </a>
</p>

{/*               <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +919888-476-943
            </p> */}
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              support@urbaniasechalo.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/share/1XQdB4ZYry/">
                <i className="fab fa-facebook" />
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/urbaniasechalo?igsh=bTRlNGU5OG9tZTB3">
                <i className="fab fa-instagram" />
              </a>
              <a className="btn btn-outline-light btn-social" href="https://wa.me/+919915243111">
                <i className="fab fa-whatsapp" />
              </a>
              <a className="btn btn-outline-light btn-social" href="http://www.linkedin.com/in/deen-bandhu-gupta-185b13376">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
            
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/444.jpeg"
                  alt=""
                />
              </div>
        
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/22.jpeg"
                  alt=""
                />
              </div>
            
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="assets/img/55.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Stay Updated with Urbania Se Chalo Get the latest travel offers, vehicle availability, and tour packages directly in your inbox.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <input
                className="form-control border-primary w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="/">
               2025
              </a>
              , All Right Reserved.
              Designed By{" "}
              <a className="border-bottom" href="https://github.com/sonu3563">
              Urbani se Chalo
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="/">Cookies</a>
                <a href="/">Help</a>
                <a href="/">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    </div>
  )
}
