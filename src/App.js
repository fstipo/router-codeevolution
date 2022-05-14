import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />

        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userID" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default React.memo(App);
