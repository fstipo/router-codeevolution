import React from 'react';
import { useNavigate } from 'react-router';

const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center p-4 display-2">Order Confirmed!</div>
      <button className="mx-5 p-3" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
};

export default React.memo(OrderSummary);
