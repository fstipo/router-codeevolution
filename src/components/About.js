import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  const activeClassHandler = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'green' : 'red',
    };
  };
  return (
    <>
      <div className="mt-4 display-1 text-center">About page</div>
      <NavLink
        style={activeClassHandler}
        className="mx-4 btn btn-success"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={activeClassHandler}
        className="mx-4 btn btn-success"
        to="/about"
      >
        About
      </NavLink>
    </>
  );
};

export default About;
