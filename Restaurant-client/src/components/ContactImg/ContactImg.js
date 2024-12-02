import React, { useEffect } from 'react';
import './ContactImg.css'; // Custom CSS for the About page
import { motion } from 'framer-motion';
// import AOS from 'aos';  // Import AOS
// import 'aos/dist/aos.css';  // Import AOS styles

export default function ContactImg() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  // }, []);
  
  return (
    <div className='Container-fluid'> 
      <div className="about-header">
        <img src="\images\bg_3.jpg" alt="About Us" className="about-header-img" />
        <div className="container about-overlay" data-aos="">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
            <h1>Contact Us</h1>
            <p className="about-quote">"We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, we're here to help!"</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
