import React from 'react';
import { motion } from 'framer-motion';
import './Details.css';

export default function Gallery() {
  return (
    <div className="row gallery-section text-center mb-5 align-items-center" data-aos="flip-up">
      <h2 className="col-12">Our Restaurant</h2>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <motion.img 
          src="/images/new26.jpg" 
          alt="Dining Area 1" 
          className="img-fluid rounded gallaryimg" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} 
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <motion.img 
          src="/images/new13.jpg" 
          alt="Dining Area 2" 
          className="img-fluid rounded gallaryimg" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} 
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <motion.img 
          src="/images/new23.jpg" 
          alt="Delicious Dish" 
          className="img-fluid rounded gallaryimg" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} 
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <motion.img 
          src="/images/new11.jpg" 
          alt="Another Dish" 
          className="img-fluid rounded gallaryimg" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} 
        />
      </div>
    
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <motion.img 
          src="/images/bg_7.jpg" 
          alt="Dining Area 1" 
          className="img-fluid rounded gallaryimg" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} 
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <motion.img 
          src="/images/insta-5.jpg" 
          alt="Dining Area 2" 
          className="img-fluid rounded gallaryimg" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} 
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <motion.img 
          src="/images/image_3.jpg" 
          alt="Delicious Dish" 
          className="img-fluid rounded gallaryimg" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} 
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <motion.img 
          src="/images/new28.jpg" 
          alt="Another Dish" 
          className="img-fluid rounded gallaryimg" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} 
        />
      </div>
    </div>
  );
}
