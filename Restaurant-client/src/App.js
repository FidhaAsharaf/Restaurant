import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodMenu from './pages/FoodMenu';
import Login from './pages/Login';  // Import Login page
import Contact from './pages/Contact';
import AdminLogin from './components/LoginSignUp/AdminLogin';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import MyReservations from './components/MyBookings/MyReservations';
import MyOrders from './components/MyBookings/MyOrders';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="/login" element={<Login />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/myorders" element={<MyOrders/>} />
        <Route path="/reservations" element={<MyReservations/>} />


      </Routes>
    </Router>
  );
}

export default App;
