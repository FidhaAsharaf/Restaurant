import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';  // Import Font Awesome Icons

export default function Footer() {
  return (
    <div className="container-fluid footer-bg">
      <div className="row">
        {/* Navigation Section */}
        <div className="col-md-3">
          <h5>NAVIGATION</h5>
          <span>Home</span><br />
          <span>About Us</span><br />
          <span>Menu</span><br />
          <span>Login</span><br />
          <span>Contact Us</span><br />
        </div>

        {/* About Us Section */}
        <div className="col-md-3">
          <h5>ABOUT US</h5>
          <p>
            Far far away, behind the word <br />
            mountains, far from the countries <br />
            Vokalia and Consonantia, there live <br />
            the blind texts.
          </p>
        </div>

        {/* Services Section */}
        <div className="col-md-3">
          <h5>SERVICES</h5>
          <span>Cooked</span><br />
          <span>Served</span><br />
          <span>Quality Foods</span><br />
          <span>Mixed</span><br />
        </div>

        {/* Contact Section */}
        <div className="col-md-3">
          <h5>HAVE SOME QUESTIONS?</h5>
          <ul>
            <li>Location: 203 Fake St. Mountain View,<br /> San Francisco, <br />California, USA</li>
            <li>Contact: +2 392 3929 210</li>
            <li>info@yourdomain.com</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="row social-section mt-4">
        <div className="col text-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="row copyright-section mt-3">
        <div className="col text-center">
          <p>&copy; 2024 Your Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
