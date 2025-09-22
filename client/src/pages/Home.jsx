import React from "react";
import "../assets/css/Home.css";
import logo from "../assets/img/img1.png"; // Replace with your logo
import careImg from "../assets/img/image.png"; // Replace with your 4 images
import treatmentImg from "../assets/img/image.png";
import medicineImg from "../assets/img/image.png";
import appointmentImg from "../assets/img/image.png";

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-center">
          <h1 className="navbar-title">DEV-CARE</h1>
        </div>
        <div className="navbar-right">
          <button className="nav-button">Sign In</button>
          <button className="nav-button">Login</button>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Grid Section */}
      <section className="grid-section">
        <div className="card">
          <img src={careImg} alt="Care" />
          <p>Care</p>
        </div>
        <div className="card">
          <img src={treatmentImg} alt="Treatment" />
          <p>Treatment</p>
        </div>
        <div className="card">
          <img src={medicineImg} alt="Medicine" />
          <p>Medicine</p>
        </div>
        <div className="card">
          <img src={appointmentImg} alt="Appointment" />
          <p>Appointment</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
