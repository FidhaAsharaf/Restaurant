import React from 'react';
import './Details.css'; // Custom CSS for additional styling
import AOS from 'aos'; // AOS Library
import 'aos/dist/aos.css'; // AOS CSS
import AboutUs from './AboutUs'; // Import individual sections
import Values from './Values';
import Team from './Team';
import Gallery from './Gallery';
import Achievements from './Achievements';

// Initialize AOS in the main component
export default function Details() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="container-fluid about-section">
      <div className="container">
        <AboutUs />       
        <Values />         
                  
        <Gallery /> 
        <Team />      
        <Achievements /> 
      </div>
    </section>
  );
}
