import React, { useState } from 'react';
import Home from '../../assets/img/home.svg';
import logoCurs from '../../assets/img/logo.png';
import HomeMenu from '../../assets/img/logo-inv.png';
import data from './data.json';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mt-10 mx-20 mb-5 h-9 w-48 mt-[-56px] md:mt-10">
        <div className="flex items-center md:flex-col md:justify-center ">
          <div className="logo">
            <img src={logoCurs} alt="Curs.md" className="hidden md:block" />
          </div>
        </div>
      </div>
      <nav className="bg-[#3c4059]">
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:pl-16">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start ">
              <div className="flex flex-shrink-0 items-center hover:bg-[#4c5069]">
                <img src={Home} alt="Home" className="h-5 w-auto cursor-pointer hidden md:block" />
              </div>
              <div className="hidden md:ml-6 md:block">
                <div className="flex ">
                  {data.links.map((link) => (
                    <a href={link.url} key={link.id}>
                      <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer hover:bg-[#4c5069]">
                        {link.text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden flex w-full justify-between">
              <img src={HomeMenu} alt="Home" className="mb-2.5 h-6" />
              <button
                type="button"
                className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
                onClick={toggleMenu}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 md:hidden">
            <div className="bg-[#9b9b9b33] flex text-gray-400">
              <img src={Home} alt="Home" className="h-5 mt-1.5 ml-px w-auto cursor-pointer" />
              <span className="block px-3 py-2 text-sm font-medium cursor-pointer hover:bg-[#4c5069]">
                Exchange rates
              </span>
            </div>
            {data.links.map((link) => (
              <a href={link.url} key={link.id}>
                <span className="text-white block px-3 py-2 text-sm font-medium cursor-pointer hover:bg-[#4c5069]">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
