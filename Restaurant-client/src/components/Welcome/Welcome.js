import React, { useEffect } from 'react';
import './Welcome.css';  // Import the welcome.css file
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

export default function Welcome() {

  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className='container-fluid welcome'>
      {/* First Section with Text */}
      <div className='conatiner'>
      <div className='row'>
        <div className='col-12 overlay-wrapper'>
          <div className='w-overlay' data-aos="fade-up">
            <h2 className="display-4">Welcome to Our Restaurant!</h2>
            <p className="lead">
              Discover a unique dining experience with exquisite dishes prepared by top chefs. 
              Enjoy a delightful blend of flavors, ambiance, and hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section with more images */}
      <div className='row mt-5 text-center'>
  <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
    <img src='/images/insta-1.jpg' className='rounded-circle img-fluid additional-image' alt='Dish 1' data-aos="fade-right" />
  </div>
  <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
    <img src='/images/insta-2.jpg' className='rounded-circle img-fluid additional-image' alt='Dish 2' data-aos="fade-up" />
  </div>
  <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
    <img src='/images/insta-3.jpg' className='rounded-circle img-fluid additional-image' alt='Dish 3' data-aos="fade-left" />
  </div>
</div>


      {/* Third Section with more text */}
      <div className='container'>
      <div className='row mt-5'>
        <div className='col-12 text-center'>
          <div className='w-overlay' data-aos="zoom-in">
            <h3 className="display-5">Exceptional Cuisine for Every Occasion</h3>
            <p className="lead">
              Whether you're joining us for a casual meal or a special event, our menu has something for everyone. 
              Taste the difference in every bite and enjoy an unforgettable dining experience.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
