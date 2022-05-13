import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Users = () => {
  const [selectedUserId, setSelectedUserId] = useState('');

  const getIDHandler = (e) => {
    const user = e.target.textContent;
    const id = user.replace('User', '').trim();
    console.log(id);
    setSelectedUserId(() => id);
    setSelectedUserId((state) => {
      console.log(state);
      return state;
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className="m-2 display-4 mb-3">Users:</div>
          {[...Array(7).keys()].map((index) => (
            <NavLink
              key={index}
              to={`${selectedUserId}`}
              className="ps-4 d-block btn text-start"
              value={selectedUserId}
              onClick={getIDHandler}
            >
              User {index}
            </NavLink>
          ))}
          <hr />
          <NavLink to="admin" className="ps-4 d-block btn text-start">
            Admin
          </NavLink>
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Users;
