// src/About.js
import React from 'react';
import Footer from '../components/Footer/Footer';
import Details from '../components/Details/Details';
import AboutImg from '../components/AboutImg/AboutImg';
import Navbar from '../components/Navbar/Navbar';

export default function About() {
  return (
    <div>
   <Navbar /> 
<AboutImg/>
     <Details />
      
      <Footer />
    </div>
  );
}
