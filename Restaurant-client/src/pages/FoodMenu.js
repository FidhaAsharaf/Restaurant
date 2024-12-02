// src/About.js
import React from 'react';
import Footer from '../components/Footer/Footer';
import MenuImg from '../components/MenuImg/MenuImg';
import RestaurantMenu from '../components/RestaurantMenu/RestaurantMenu';
import MenuContent from '../components/MenuContent/MenuContent';
import Navbar from '../components/Navbar/Navbar';
export default function FoodMenu() {
  return (
    <div>
            <Navbar /> 
      <MenuImg />
      <RestaurantMenu />
      <MenuContent/>
      <Footer />
    </div>
  );
}
