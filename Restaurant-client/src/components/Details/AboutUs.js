import React from 'react';
import './Details.css';

export default function AboutUs() {
  return (
    <div className="row about-content align-items-center mb-5 g-0">
      {/* Column for Image */}
      <div className="col-12 col-md-6 mb-3 mb-md-0" data-aos="fade-right">
        <img 
          src="/images/AboutUs.jpg" 
          alt="Restaurant" 
          className="img-fluid rounded shadow image-gap"
        />
      </div>
      
      {/* Column for Text */}
      <div className="col-12 col-md-6 mb-3 mb-md-0" data-aos="fade-right">
        <h1 className="text-center text-md-start mb-3 text-heading">About Us</h1>
        <p className="text-dark text-center text-md-start">
          Welcome to <strong>Tasty Trails Restaurant</strong>, your go-to place for delicious food and exceptional dining experiences.
          Since our inception in 1995, we have been committed to providing our customers with not just food but an unforgettable experience.
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College, discovered its source in classical literature. Since our inception in 1995, we have been committed to providing our customers with not just food but an unforgettable experience.
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College, discovered its source in classical literature. Since our inception in 1995, we have been committed to providing our customers with not just food but an unforgettable experience.
          Contrary to popular belief, Lorem Ipsum</p>

      </div>
    </div>
  );
}
