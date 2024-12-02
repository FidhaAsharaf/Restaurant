import React from 'react';
import Footer from '../components/Footer/Footer';
import ContactUs from '../components/ContactUs/ContactUs';
import ContactImg from '../components/ContactImg/ContactImg';
import Navbar from '../components/Navbar/Navbar';
export default function Contact() {
  return (
    <div>
      <Navbar /> 
      <ContactImg/>
      <ContactUs /> 
    <Footer />
    </div>
  );
}
