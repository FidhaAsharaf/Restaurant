import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import './Details.css'; // Assuming you place the CSS here

export default function Achievements() {
  return (
    <div className="row text-center mb-5">
      <h2 className="col-12 mb-4">Our Achievements</h2>

      <motion.div className="col-lg-4 col-md-6 mb-4" whileHover={{ scale: 1.1 }}>
        <div className="small-card" data-aos="flip-left">
          <h3>
            <CountUp end={150} duration={7} className='text-dark'/>k Happy Customers
          </h3>
          <p className='text-dark card-para'>We’ve proudly served over 150,000 satisfied customers.</p>
        </div>
      </motion.div>

      <motion.div className="col-lg-4 col-md-6 mb-4" whileHover={{ scale: 1.1 }}>
        <div className="small-card" data-aos="flip-down">
          <h3>Since <CountUp end={1985} duration={5} className='text-dark'/></h3>
          <p className='text-dark card-para'>We’ve been serving delicious meals since 1985. Happy years.</p>
        </div>
      </motion.div>

      <motion.div className="col-lg-4 col-md-6 mb-4" whileHover={{ scale: 1.1 }}>
        <div className="small-card" data-aos="flip-right">
          <h3><CountUp end={5} duration={10} className='count text-dark'/> Awards Won</h3>
          <p className='text-dark card-para'>We’ve received 5 prestigious awards for our excellent service.</p>
        </div>
      </motion.div>
    </div>
  );
}
