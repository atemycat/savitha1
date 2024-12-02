import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="header-logo-center">
          <Link to="/" className="savitha-logo">SAVITHA</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;