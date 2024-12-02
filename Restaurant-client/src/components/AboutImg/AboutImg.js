import React from 'react';
import './AboutImg.css'; // Custom CSS for the About page
import { motion } from 'framer-motion';


export default function AboutImg() {

  
  return (
    <div className='Container-fluid'> 
      <div className="about-header">
        <img src="/images/new20.jpg" alt="About Us" className="about-header-img" />

        <div className="container about-overlay" >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
            <h1>About Us</h1>
            <p className="about-quote">"Every dish has a story, and ours is one of passion, tradition, and a love for bringing people together through food."</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
