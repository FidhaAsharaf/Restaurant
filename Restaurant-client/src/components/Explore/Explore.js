import React, { useEffect } from 'react';
import './Explore.css';
import ExploreButton from './ExploreButton';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles


  

export default function Explore() {
  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="container-fluid food-menu-section d-flex align-items-center text-center">
      <div className="container overlay-content w-100" data-aos="zoom-in">
        <h1 className="food-menu-heading">Our Delicious Food Menu</h1>
        <p className="food-menu-quote">
          "Good food is the foundation of genuine happiness."
        </p>

        {/* Additional Content */}
        <p className="food-menu-subheading">
          Explore a wide variety of dishes crafted with love and passion by our expert chefs.
          Each dish is a blend of tradition, flavor, and creativity, guaranteed to satisfy your taste buds.
        </p>
        

        {/* Explore Button */}
        <ExploreButton to="/menu" text="Explore" />
      </div>
    </div>
  );
}
