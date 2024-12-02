import React from 'react';
import './Carousal.css'; // Import your custom CSS file
import { motion } from 'framer-motion';



export default function Carousal() {
  return (
    
      <div id="demo" className="container_fluid carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/bg1_new4.jpg" alt="Los Angeles" className="d-block w-100" />
            <div className="carousel-caption">
            <motion.a
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  
>
            <h3>Cooking Since</h3>
              <p>1985</p></motion.a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/bg2_new.jpg" alt="Chicago" className="d-block w-100 img-fluid" />
            <div className="carousel-caption">
            <motion.a
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  
>
              <h3>Best Quality</h3>
              <p>Food</p>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    
  );
}
