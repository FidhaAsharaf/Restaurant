
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import CreateMenu from './CreateMenu';
import UpdateMenu from './UpdateMenu';
import ViewContact from './ViewContact';
import ViewUsers from './ViewUser';
import Order from './Order';
import ViewReservation from './ViewReservation';
import './AdminDashboard.css';
import WelcomeDashboard from './WelcomeDashboard';

const App = () => {
  const [activePage, setActivePage] = useState('menu');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirects to Home component
  };

  const renderPage = () => {
    switch (activePage) {
      case 'user':
        return <ViewUsers />;
      case 'order':
        return <Order />;
      case 'contact':
        return <ViewContact />;
      case 'reservation':
        return <ViewReservation />;
      case 'createMenu':
        return <CreateMenu />;
      case 'updateMenu':
        return <UpdateMenu />;
      default:
        return <WelcomeDashboard />;
    }
  };

  return (
    <div className="app-container">
      {isSidebarOpen && (
        <Sidebar
          setActivePage={setActivePage}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
      )}
      <div className={`content ${isSidebarOpen ? 'content-with-sidebar' : ''}`}>
        <div className="top-section">
          <button
            className="toggle-btn"
            onClick={() => setIsSidebarOpen(true)}
          >
            Menu
          </button>
          <h1 className="dashboard-heading">Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="dashboard-section">
          <div className="scrollable">{renderPage()}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
