import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles
import './Cards.css';
import { motion } from 'framer-motion';

export default function Cards() {
  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid what-we-do">
      <div className="container">
        <h2 className="category-title text-center">WHAT WE DO</h2>
        <div className="row">
          <motion.div className="col-md-4 col-sm-6 mb-4" whileHover={{ scale: 1.1 }}>
            <div className="card menu-item home-card" data-aos="flip-left">
              <div className="card-header-custom">
                <img className="img-custom img-fluid" src="images/dish.png" alt="Easy to Order" />
              </div>
              <div className="card-body card-body-custom">
                <h5 className="card-title text-center">Easy to Order</h5>
                <p className="card-text text-center text-dark">
                  It is a long text that its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-md-4 col-sm-6 mb-4" whileHover={{ scale: 1.1 }}>
            <div className="card menu-item home-card" data-aos="flip-left">
              <div className="card-header-custom">
                <img className="img-custom img-fluid" src="images/food-and-beverage.png" alt="Fastest Delivery" />
              </div>
              <div className="card-body card-body-custom">
                <h5 className="card-title text-center">Fastest Delivery</h5>
                <p className="card-text text-center text-dark">
                  It is a long text that its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-md-4 col-sm-6 mb-4" whileHover={{ scale: 1.1}}>
            <div className="card menu-item home-card" data-aos="flip-left">
              <div className="card-header-custom">
                <img className="img-custom img-fluid" src="images/tray.png" alt="Quality Food" />
              </div>
              <div className="card-body card-body-custom">
                <h5 className="card-title text-center">Quality Food</h5>
                <p className="card-text text-center text-dark">
                  It is a long text that its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
