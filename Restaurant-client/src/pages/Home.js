import React from 'react'
import Carousal from '../components/Carousal/Carousal'
import Welcome from '../components/Welcome/Welcome'
import Cards from '../components/Cards/Cards'
import Explore from '../components/Explore/Explore'
import Footer from '../components/Footer/Footer'
import Reservation from '../components/Reservation/Reservation'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div> 
    <Navbar /> 
    <Carousal />
    <Welcome />
    <Cards/>
    <Explore />
    <Reservation />
    <Footer />
    </div>
  )
}
