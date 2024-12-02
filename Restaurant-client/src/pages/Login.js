import React from 'react';
import LoginSignUp from '../components/LoginSignUp/LoginSignUp';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
const Login = () => {
  return (
    <div>
            <Navbar /> 
      <LoginSignUp />
      <Footer />
    </div>
  );
};

export default Login;
