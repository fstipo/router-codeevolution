import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  console.log({ NavLink });
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
    </nav>
  );
};

export default Navbar;
