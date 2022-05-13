import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const activeHandler = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      backgroundColor: isActive ? 'green' : 'red',
    };
  };
  return (
    <>
      <div className="mt-4 display-1 text-center">Home page</div>
      <NavLink style={activeHandler} className="mx-4 btn btn-success" to="/">
        Home
      </NavLink>
      <NavLink
        style={activeHandler}
        className="mx-4 btn btn-success"
        to="/about"
      >
        About
      </NavLink>
      <div className="m-5">
        <button
          className="btn btn-outline-dark"
          onClick={() => navigate('/order-summary', { replace: true })}
        >
          Order
        </button>
      </div>
    </>
  );
};

export default Home;
