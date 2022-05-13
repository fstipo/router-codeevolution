import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userID } = useParams();

  return <div className="display-5">Details about user {userID}</div>;
};

export default UserDetails;
