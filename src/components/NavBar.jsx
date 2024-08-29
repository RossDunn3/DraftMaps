import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Map from '../pages/Map'


const NavBar = () => {
  return (
    <nav className="">
    <div className="h-30 flex items-center justify-between p-5">
      
      <div className="flex text-3xl font-mono italic items-center bg-orange-500 rounded-md p-2 text-white shadow-xl">
        DraftMaps
      </div>

      <ul className="flex space-x-4 text-xl ">
        <li>
          <Link to="/home" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/map" className="hover:underline">
            Map
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <div class="w-0.5 h-8 bg-gray-300"></div>
        <li>
        <Link to="/community" className="hover:underline">
            Community
          </Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link to="/" className=" bg-orange-500 rounded-md p-2 text-white shadow-xl">
            Sign in
          </Link>
        </li>
        <li>
        <Link to="/" className="">

        </Link>
        </li>
      </ul>
      
    </div>

    
  </nav>
  );
};

export default NavBar;



     