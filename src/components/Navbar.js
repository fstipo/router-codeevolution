import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-center text-white p-3">
      <NavLink className="btn text-white mx-3 fs-3" to="/">
        Home
      </NavLink>
      <NavLink className="btn text-white mx-3 fs-3" to="/about">
        About
      </NavLink>
      <NavLink className="btn text-white mx-3 fs-3" to="/products">
        Products
      </NavLink>
      <NavLink className="btn text-white mx-3 fs-3" to="/users">
        Users
      </NavLink>
    </nav>
  );
};

export default React.memo(Navbar);
