import React, { useEffect, useState } from 'react';
import Login from './Login';
import image from '/public/k2.png'; 
import { useAuth } from '../context/Authprovider';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      element.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Collections</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${
        sticky ? 'shadow-md bg-gray-900' : 'bg-gray-900'
      } transition-all duration-300 dark:bg-slate-900`}
    >
      <div
        className={`navbar h-full ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-base-100'
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          
          <a className="text-2xl font-extrabold cursor-pointer text-pink-600 ml-5">
            <span className="text-blue-500">Cloth</span>
            <span className="text-yellow-500">Haven</span>
          </a>
        </div>

        <div className="navbar-end space-x-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          
          <div className="hidden md:block">
            <label className="input flex items-center gap-2">
              <input
                type="text"
                className="grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Search Products"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          
          <label className="swap swap-rotate">
  <input
    type="checkbox"
    className="theme-controller"
    onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    checked={theme === 'dark'}
  />
  
  {/* <svg
    className="swap-off h-8 w-8 fill-current text-yellow-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17Z" />
  </svg>

 
  <svg
    className="swap-on h-8 w-8 fill-current text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36" />
  </svg> */}
</label>
         
          <div>
            <img
              src={image}
              alt="Cart"
              className="h-8 w-8 md:h-10 md:w-10 object-contain cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out block"
            />
          </div>
          
          <div>
            <a
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300 cursor-pointer pl-4"
              onClick={() => {
                document.getElementById('my_modal_3').showModal();
              }}
            >
              Login
            </a>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
