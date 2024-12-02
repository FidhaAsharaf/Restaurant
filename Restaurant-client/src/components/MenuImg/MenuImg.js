import React, { useEffect } from 'react';
import './MenuImg.css'; // Custom CSS for the About page
import { motion } from 'framer-motion';
// import AOS from 'aos';  // Import AOS
// import 'aos/dist/aos.css';  // Import AOS styles



export default function MenuImg() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  // }, []);
  return (
    <div className='Container-fluid'> <div className="about-header">
    <img src="/images/Menu.jpg" alt="About Us" className="about-header-img" />
    <div className="container about-overlay" data-aos="">
    <motion.div
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}>
      <h1>Menu</h1>
      <p className="about-quote">"Good food brings people together. Explore our menu and savor the flavors that create unforgettable moments."</p>
      </motion.div>
    </div>
  </div>
</div>
  )
}
