import React, {useState} from 'react'
import video from '../assets/video/bg-video1.mp4'
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
console.log("formndata", formData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://urbaniasechalo.vercel.app/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  };

const packages = [
  {
    id: 1,
    image: "assets/img/manali.jpeg",
    location: "Kullu-Manali",
    days: "3N/4D",
    persons: "2 Person",
    price: "Amazing Kullu Manali",
    rating: 5,
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
  },
  {
    id: 2,
    image: "assets/img/99.jpeg",
    location: "Dalhousie - Dharamshala",
    days: "3N/4D",
    persons: "1 Person",
    price: "Amazing Dharamshala",
    rating: 5,
    description:
      "Magna sit amet purus gravida quis blandit turpis cursus in hac habitasse.",
  },
   {
    id: 3,
    image: "assets/img/kasol.jpeg",
    location: "Shimla - Manali - Kasol",
    days: "4N/5D",
    persons: "2 Person",
    price: "Amazing Shimla – Manali",
    rating: 5,
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
  },
  {
    id: 4,
    image: "assets/img/Prashar.jpeg",
    location: "Jibhi - Jalori Pass - Parashar Lake",
    days: "4N/5D",
    persons: "1 Person",
    price: "Amazing Jibhi – Jalori Pass",
    rating: 5,
    description:
      "Magna sit amet purus gravida quis blandit turpis cursus in hac habitasse.",
  },
    {
    id: 5,
    image: "assets/img/kasol2.jpeg",
    location: "Shimla - Manali - Kasol",
    days: "5N/6D",
    persons: "2 Person",
    price: "Amazing Shimla – Manali",
    rating: 5,
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
  },
   {
    id: 7,
    image: "assets/img/narkanda1.jpeg",
    location: "Kufri - Narkanda - Jibhi - Kasol      ",
    days: "5N/6D",
    persons: "2 Person",
    price: "Amazing Narkanda – Kasol",
    rating: 5,
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
  },
  {
    id: 6,
    image: "assets/img/baralacha.com",
    location: "Manali - Keylong - Trilokinath - Baralacha - Sissu - Manali",
    days: "6N/7D",
    persons: "1 Person",
    price: "Amazing Manali – Baralachha",
    rating: 5,
    description:
      "Magna sit amet purus gravida quis blandit turpis cursus in hac habitasse.",
  },
  
    {
    id: 8,
    image: "assets/img/kkalpa.jpeg",
    location: "Shimla - Narkanda - Sangla - Kalpa - Sarahan - Shimla",
    days: "6N/7D",
    persons: "1 Person",
    price: "Amazing  Shimla - Kinnaur   valley",
    rating: 5,
    description:
      "Magna sit amet purus gravida quis blandit turpis cursus in hac habitasse.",
  },
   

    {
    id: 9,
    image: "assets/img/_ (4).jpeg",
    location: "Shimla - Manali - Dharamshala - Dalhousie - Amritsar",
    days: "9N/10D",
    persons: "2 Person",
    price: "Grand Himachal + Amritsar",
    rating: 5,
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
  },
];


const Vehicle = [
  {
    id: 1,
    image: "assets/img/12.jpeg",
    location: "Malaysia",
    days: "3 days",
    persons: "2 Person",
    price: "Urbania",
    rating: 5,
    description:
      "Per Day 250 km Running",

    description1:
      "300/- Driver Night Charges ",
    description2:
      "Toll/Parking Extra",
  },
    {
    id: 2,
    image: "assets/img/13.png",
    location: "Malaysia",
    days: "3 days",
    persons: "2 Person",
    price: "Urbania",
    rating: 5,
    description:
      "Per Day 250 km Running",

    description1:
      "300/- Driver Night Charges ",
    description2:
      "Toll/Parking Extra",
  },
  {
    id: 3,
    image: "assets/img/55.png",
    location: "Malaysia",
    days: "3 days",
    persons: "2 Person",
    price: "Urbania",
    rating: 5,
    description:
      "Per Day 250 km Running",

    description1:
      "300/- Driver Night Charges ",
    description2:
      "Toll/Parking Extra",
  },
    {
    id: 4,
    image: "assets/img/mtt.png",
    location: "Malaysia",
    days: "3 days",
    persons: "2 Person",
    price: "Maharaja Tempo Traveller",
    rating: 5,
    description:
      "Per Day 250 km Running",

    description1:
      "300/- Driver Night Charges ",
    description2:
      "Toll/Parking Extra",
  },
    {
    id: 5,
    image: "assets/img/tt.jpeg",
    location: "Malaysia",
    days: "3 days",
    persons: "2 Person",
    price: "Tempo Traveller",
    rating: 5,
    description:
      "Per Day 250 km Running",

    description1:
      "300/- Driver Night Charges ",
    description2:
      "Toll/Parking Extra",
  },
    {
    id: 6,
    image: "assets/img/222.png",
    location: "Malaysia",
    days: "3 days",
    persons: "2 Person",
    price: "Innova Crysta",
    rating: 5,
    description:
      "Per Day 250 km Running",

    description1:
      "300/- Driver Night Charges ",
    description2:
      "Toll/Parking Extra",
  },
  
];



  const filteredPackages = packages.filter((pkg) => pkg.rating >= 5);
    const filteredVehicle = Vehicle.filter((pkg) => pkg.rating >= 3);


  return (
    <div>
      {/* <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Enjoy Your Vacation With Us
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Tempor erat elitr rebum at clita diam amet diam et eos erat
                ipsum lorem sit
              </p>
               <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div> *
            </div>
          </div>
        </div>
      </div> */}
<div id="Home" className="container-fluid bg-primary py-5 mb-5 hero-header">
  <video autoPlay loop muted playsInline>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="container py-5">
    <div className="row justify-content-center py-5">
      <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          Make Every Vacation Comfortable With Us
        </h1>
        <p className="fs-4 text-white mb-4 animated slideInDown">
We give you clean, safe, and smooth rides. Enjoy every journey with full comfort.
        </p>
        {/* Optional search form */}
      </div>
    </div>
  </div>
</div>


            {/* About Start */}
    <div id="About" className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/about.jpeg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">Urbania se chalo</span>
            </h1>
            <p className="mb-4">
            Welcome to Urbania Se Chalo
At Urbania Se Chalo, we make your travel safe, easy, and comfortable. Whether it’s a family trip, couple’s ride, or group travel – we take care of everything to make your journey stress-free and special.

            </p>
            <p className="mb-4">
              We use the latest model Urbania vans and provide top-class service for all your travel needs. Our goal is simple – to give you a smooth ride and a great travel experience.
Because <span class="fw-bold text-dark">Urbania Se Chalo matlab Comfort Se Chalo!</span>


            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  2 to 5-Star Hotels & Resorts (on request)
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  5-Star Level Comfort & Spacious Seating
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Force Urbania, Tempo Travellers & Innova Crysta
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  North India Tours – All Major Cities & Hill Stations
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Top Models with Full Safety Features
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  24x7 Booking & Customer Support
                </p>
              </div>
            </div>
            {/* <Link className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </Link> */}
                                 <ScrollLink
              to="Vehicles"
              smooth={true}
              duration={500}
              offset={-70} // adjust if you have a fixed navbar
className="btn btn-primary py-3 px-5 mt-2"
            >
                  Read More
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Service Start */}
    {/* <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Services
          </h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Service End */}
    {/* Destination Start */}
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Popular Destination</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/11.jpeg"
                    alt=""
                  />
                  {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    30% OFF
                  </div> */}
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Manali
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/dal"
                    alt=""
                  />
                  {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    25% OFF
                  </div> */}
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Dalhousie
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/77.jpeg"
                    alt=""
                  />
                  {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    35% OFF
                  </div> */}
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Dharamshala
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: 350 }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/44.jpeg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              {/* <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                20% OFF
              </div> */}
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Shimla
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Vehicle Start */}

   <div id="Vehicles" className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Services
          </h6>
          <h1 className="mb-5">Vehicle Services</h1>
        </div>
        <div className="row g-4 justify-content-center">
           {filteredVehicle.map((pkg) => (
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.5s"
          key={pkg.id}
        >
          <div className="package-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={pkg.image} alt={pkg.location} />
            </div>
            {/* <div className="d-flex border-bottom">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-map-marker-alt text-primary me-2" />
                {pkg.location}
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-calendar-alt text-primary me-2" />
                {pkg.days}
              </small>
              <small className="flex-fill text-center py-2">
                <i className="fa fa-user text-primary me-2" />
                {pkg.persons}
              </small>
            </div> */}
            <div className="text-center p-4">
              <h3 className="mb-0">{pkg.price}</h3>
              <div className="mb-3">
                {Array.from({ length: pkg.rating }).map((_, i) => (
                  <small key={i} className="fa fa-star text-primary" />
                ))}
              </div>
         <p className="mb-1">{pkg.description}</p>
<p className="mb-2">{pkg.description1}</p>
<p className="fw-bold text-dark mb-4">{pkg.description2}</p>


              <div className="d-flex justify-content-center  mb-2">
                <a
  href="https://wa.me/+919915243111"
                  className="btn btn-sm btn-primary px-3 border-end"
                  style={{ borderRadius: "30px 0 0 30px" }}
                >
                  Whatsapp
                </a>
                <a
  href="tel:+919915243111"
                  className="btn btn-sm btn-primary px-3"
                  style={{ borderRadius: "0 30px 30px 0" }}
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>

    {/* Package Start */}
    <div id="Packages"className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Packages
          </h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">
           {filteredPackages.map((pkg) => (
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.5s"
          key={pkg.id}
        >
          <div className="package-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={pkg.image} alt={pkg.location} />
            </div>
            <div className="d-flex border-bottom">
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-map-marker-alt text-primary me-2" />
                {pkg.location}
              </small>
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-calendar-alt text-primary me-2" />
                {pkg.days}
              </small>
              {/* <small className="flex-fill text-center py-2">
                <i className="fa fa-user text-primary me-2" />
                {pkg.persons}
              </small> */}
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">{pkg.price}</h3>
              <div className="mb-3">
                {Array.from({ length: pkg.rating }).map((_, i) => (
                  <small key={i} className="fa fa-star text-primary" />
                ))}
              </div>
              {/* <p>{pkg.description}</p> */}
              <div className="d-flex justify-content-center mb-2">
                <a
  href="https://wa.me/+919915243111"
                  className="btn btn-sm btn-primary px-3 border-end"
                  style={{ borderRadius: "30px 0 0 30px" }}
                >
                  Whatsapp
                </a>
                <a
  href="tel:+919915243111"
                  className="btn btn-sm btn-primary px-3"
                  style={{ borderRadius: "0 30px 30px 0" }}
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>

   
    {/* Package End */}
    {/* Booking Start */}
    
    {/* Booking Start */}
    {/* Process Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Process
          </h6>
          <h1 className="mb-5">3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-globe fa-3x text-white" />
              </div>
              <h5 className="mt-4">Choose A Destination</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                Tell us where you want to go – local, outstation, hill station, or group tour.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-dollar-sign fa-3x text-white" />
              </div>
              <h5 className="mt-4">Contact us for Booking</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
Call or message us to check availability, vehicle type, and confirm booking.

              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-plane fa-3x text-white" />
              </div>
              <h5 className="mt-4">Enjoy your Ride</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
               We pick you up on time with a clean, GPS-enabled vehicle and a polite driver.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contact" className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
                   Your next comfortable journey is just a click away! At Urbania Se Chalo, we make booking easy, fast, and hassle-free.
              </p>
              <p className="mb-4">
          Whether it’s a family vacation, a weekend getaway, or a business trip, our premium Urbania vans and top-class service will make your travel experience smooth and stress-free.
Fill in your details, choose your destination, and let us handle the rest. Because with us, every journey is all about comfort, safety, and style.
              </p>
              {/* <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                Read More
              </a> */}
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Book A Tour</h1>
           <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="name"
                        placeholder="Your Name"
                          value={formData.name}
                onChange={handleChange}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent"
                        id="email"
                        placeholder="Your Email"
                          value={formData.email}
                onChange={handleChange}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating"
                      id="number"
                      data-target-input="number"
                    >
                      <input
                        type="number"
                        className="form-control bg-transparent"
                        id="number"
                        placeholder="Phone Number"
                          value={formData.number}
                onChange={handleChange}
                    
                      />
                      <label htmlFor="number">Phone Number</label>

                    </div>
                  </div>
           

                    <div className="col-md-6">
  <div className="form-floating">
    <select
      className="form-control bg-transparent"
      id="destination"
      name="destination"
      value={formData.destination}
      onChange={handleChange}
    >
      <option value="">Select a Package</option>
      {packages.map((pkg) => (
        <option key={pkg.id} value={pkg.price}>
          {pkg.price}
        </option>
      ))}
    </select>
    <label htmlFor="destination">Destination</label>
  </div>
</div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: 100 }}
             
                          value={formData.message}
                onChange={handleChange}
                      />
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-outline-light w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Process Start */}
    {/* Team Start */}
    {/* <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Travel Guide
          </h6>
          <h1 className="mb-5">Meet Our Guide</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Team End */}
    {/* Testimonial Start */}
    {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-1.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-2.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-3.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimonial-4.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">John Doe</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
      </div>
    </div> */}
    {/* Testimonial End */}  
    </div>
  )
}
