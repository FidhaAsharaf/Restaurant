
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa'; // Importing the hamburger menu icon

// import './Navbar.css';


// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userEmail, setUserEmail] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedEmail = sessionStorage.getItem('userEmail');
//     if (storedEmail) {
//       setIsLoggedIn(true);
//       setUserEmail(storedEmail);
//     }
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem('userEmail'); // Clear the session storage
//     setIsLoggedIn(false);
//     setUserEmail('');
//     alert('Logged out successfully!');
//     navigate('/login');
//   };

//   return (
//     <div className="container">
//       <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
//         <div className="container">
//           <a className="navbar-brand nav-heading" href="#">
//             <img src="/images/new-logo3.png" className="img-logo" alt="logo" /><b>Tasty Trails</b>
//           </a>
//           {/* <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#ftco-nav"
//             aria-controls="ftco-nav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="oi oi-menu"></span> Menu
//           </button> */}
//           <button
//   className="navbar-toggler custom-toggler"
//   type="button"
//   data-bs-toggle="collapse"
//   data-bs-target="#ftco-nav"
//   aria-controls="ftco-nav"
//   aria-expanded="false"
//   aria-label="Toggle navigation"
// >
//   {/* <span className="oi oi-menu menu-icon"></span> */}
//   <FaBars className="menu-icon" /> {/* Replace the oi-menu with FaBars */}


// </button>


//           <div className="collapse navbar-collapse" id="ftco-nav">
//             <ul className="navbar-nav ml-auto nav-pad">
//               <li className="nav-item active">
//                 <Link to="/" className="nav-link">HOME</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link">ABOUT</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/menu" className="nav-link">MENU</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact" className="nav-link">CONTACT</Link>
//               </li>
//               {isLoggedIn ? (
//                 <>
//                   <li className="nav-item">
//                     <span className="nav-link">Hello, {userEmail}</span>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="/myorders" className="nav-link">My Orders</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="/reservations" className="nav-link">My Reservations</Link>
//                   </li>
//                   <li className="nav-item">
//                     <button className="nav-link btn" onClick={handleLogout}>LOGOUT</button>
//                   </li>
//                 </>
//               ) : (
//                 <li className="nav-item dropdown">
//                   <a
//                     className="nav-link dropdown-toggle"
//                     href="#"
//                     id="loginDropdown"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     LOGIN
//                   </a>
//                   <ul className="dropdown-menu dropstyle bg-dark" aria-labelledby="loginDropdown">
//                     <li>
//                       <Link to="/adminlogin" className="dropdown-item text-white bg-transparent-hover">Admin Login</Link>
//                     </li>
//                     <li>
//                       <Link to="/login" className="dropdown-item text-white bg-transparent-hover">User Login</Link>
//                     </li>
//                   </ul>

//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importing the hamburger menu icon

import './Navbar.css';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('userEmail');
    if (storedEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userEmail'); // Clear the session storage
    setIsLoggedIn(false);
    setUserEmail('');
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          {/* Replace href="#" with "/" or a meaningful route */}
          <Link className="navbar-brand nav-heading" to="/">
            <img src="/images/new-logo3.png" className="img-logo" alt="logo" />
            <b>Tasty Trails</b>
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="menu-icon" />
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto nav-pad">
              <li className="nav-item active">
                <Link to="/" className="nav-link">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">MENU</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link">Hello, {userEmail}</span>
                  </li>
                  <li className="nav-item">
                    <Link to="/myorders" className="nav-link">My Orders</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/reservations" className="nav-link">My Reservations</Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn" onClick={handleLogout}>LOGOUT</button>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  {/* Replace href="#" with "javascript:void(0);" to prevent default navigation */}
                  <a
                    className="nav-link dropdown-toggle"
                    href="javascript:void(0);"
                    id="loginDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    LOGIN
                  </a>
                  <ul className="dropdown-menu dropstyle bg-dark" aria-labelledby="loginDropdown">
                    <li>
                      <Link to="/adminlogin" className="dropdown-item text-white">Admin Login</Link>
                    </li>
                    <li>
                      <Link to="/login" className="dropdown-item text-white">User Login</Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

