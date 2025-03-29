import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className="bg-background p-4 font-ubuntu w-full"> 
      <div className=" mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Left side (Logo) */}
          <div className="shrink-0">
            <h1 className="text-white text-4xl font-[300] ">/Rohit</h1>
          </div>

          {/* Centered Menu Links (hidden on small screens) */}
          <div className="hidden sm:flex sm:flex-1 justify-center  ">
            <div className="flex space-x-4 border-[0.1px] rounded-full px-5">
              <NavLink
                to="/"
                className={({isActive})=>isActive?"text-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-m font-[400]":"text-gray-300 hover:text-primary px-3 py-2 rounded-md text-m font-[400]"}
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutme"
                className={({isActive})=>isActive?"text-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-m font-[400]":"text-gray-300 hover:text-primary px-3 py-2 rounded-md text-m font-[400]"}
              >
                About Me
              </NavLink>
              <NavLink
                to="/projects"
                className={({isActive})=>isActive?"text-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-m font-[400]":"text-gray-300 hover:text-primary px-3 py-2 rounded-md text-m font-[400]"}
              >
                Projects
              </NavLink>
            
            </div>
          </div>

          {/* Right side button (Login) */}
          <div className="hidden sm:flex">
          <NavLink
                to="/contactme"
                className={({isActive})=>isActive?"text-blue-500 hover:text-blue-500 px-3 py-2 rounded-md text-m font-[400]":"text-gray-300 hover:text-primary px-3 py-2 rounded-md text-m font-[400]"}
              >
            
              Contact Me
          
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="sm:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/aboutme"
            className="text-gray-300 hover:text-primary  block px-3 py-2 rounded-md text-base font-medium"
          >
            About Me
          </Link>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Me
          </a>
       
        </div>
      </motion.div>
    </nav>
    </div>
  );
}
