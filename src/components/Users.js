import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink, useSearchParams } from 'react-router-dom';

const Users = () => {
  const [selectedUserId, setSelectedUserId] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUsers = searchParams.get('filter') === 'active';

  // Problem with rendering page
  const getIDHandler = (e) => {
    setSelectedUserId(e.target.id);
    selectedUserId((state) => {
      console.log(state);
      return;
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className="m-2 display-4 mb-3">Users:</div>
          {[...Array(7).keys()].map((index) => (
            <NavLink
              id={index}
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
          <div className="mt-5">
            <button
              className="btn btn-dark me-4"
              onClick={() => setSearchParams({ filter: 'active' })}
            >
              Active users
            </button>
            <button
              className="btn btn-dark"
              onClick={() => setSearchParams({})}
            >
              Reset filter
            </button>
            {showActiveUsers ? (
              <h2 className="mt-5">Show active users</h2>
            ) : (
              <h2 className="mt-5">Show all users</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
