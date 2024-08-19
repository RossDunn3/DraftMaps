import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <nav>
  <ul className="flex bg-slate-500 text-white h-10 items-center p-6 text-lg">
    <li className='mr-6'>
      <Link to="/">DraftMaps</Link>
    </li>
      <li className='mr-6'>
        <Link to="/map">Map </Link>
      </li>
  </ul>
</nav>
    <Outlet />
    </>
  );
};

export default NavBar;