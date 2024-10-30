// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';
import hub88Big from '../images/hub88Big.png';


const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="logoSmall" onClick={() => window.location.href = "/"}>
        <img src={hub88Big} alt="Hub88 Logo" />
      </div>
      <nav className="menu">
        <Link to="/operator" className={location.pathname === '/operator' ? 'active' : ''}>Operator Cases</Link>
        <Link to="/provider" className={location.pathname === '/provider' ? 'active' : ''}>Provider Cases</Link>
        <Link to="/other" className={location.pathname === '/other' ? 'active' : ''}>Other Cases</Link>
        <Link to="/favorites" className={location.pathname === '/favorites' ? 'active' : ''}>My Favorite ⭐</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
