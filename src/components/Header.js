import { Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <div className="Header">
      <Typography variant="h3" color="#93ad18">
        HRnet
      </Typography>
      <Typography variant="button" width="290px" marginRight="3%">
        <nav className="navigation">
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : 'desactive'}
          >
            Home
          </Link>
          <Link
            to={'/list'}
            className={location.pathname === '/list' ? 'active' : 'desactive'}
          >
            Current Employees
          </Link>
        </nav>
      </Typography>
    </div>
  );
}

export default Header;
