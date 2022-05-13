import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <div className="m-3">
        <input type="search" placeholder="Search Products"></input>
      </div>
      <nav>
        <Link
          className="product-link ms-1 btn btn-link text-dark"
          to="featured"
        >
          Featured
        </Link>
        <Link className="product-link btn btn-link text-dark" to="new">
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
