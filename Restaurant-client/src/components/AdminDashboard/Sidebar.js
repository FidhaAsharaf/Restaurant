// import React, { useState } from 'react';
// import './Sidebar.css';

// const Sidebar = ({ setActivePage }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setMenuOpen(!menuOpen); 
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>Tasty Trials</h2>
//       </div>
//       <div className="sidebar-menu-options">
//         <button onClick={handleMenuClick}>Menu</button>
//         {menuOpen && (
//           <div className="sidebar-submenu">
//             <button className='sub-button' onClick={() => setActivePage('createMenu')}>Create</button>
//             <button className='sub-button' onClick={() => setActivePage('updateMenu')}>Update</button>
//           </div>
//         )}

//         <button onClick={() => setActivePage('user')}>User</button>
//         <button onClick={() => setActivePage('order')}>Order</button>
//         <button onClick={() => setActivePage('contact')}>contact</button>
//         <button onClick={() => setActivePage('reservation')}>Reservation</button>

//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActivePage, closeSidebar }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Tasty Trials</h2>
        <button className="close-btn" onClick={closeSidebar}>
          &times;
        </button>
      </div>
      <div className="menu-options">
        <button onClick={() => { setActivePage('createMenu'); closeSidebar(); }}>
          Create Menu
        </button>
        <button onClick={() => { setActivePage('updateMenu'); closeSidebar(); }}>
          Update Menu
        </button>
        <button onClick={() => { setActivePage('user'); closeSidebar(); }}>User</button>
        <button onClick={() => { setActivePage('order'); closeSidebar(); }}>Order</button>
        <button onClick={() => { setActivePage('contact'); closeSidebar(); }}>Contact</button>
        <button onClick={() => { setActivePage('reservation'); closeSidebar(); }}>Reservation</button>
      </div>
    </div>
  );
};

export default Sidebar;
