import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='fixed z-[100] w-screen h-14 bg-purple-300/20 backdrop-blur-sm flex justify-between xl:justify-around lg:justify-around items-center px-4 md:px-8 lg:px-16'>
      {/* Brand/Logo */}
      <h1 className='text-xl md:text-2xl h-10 text-transparent bg-clip-text bg-gradient-to-tr from-Primary to-80% to-Secondary font-pacifico'>
        Portfolio
      </h1>

      {/* Desktop Navigation Links */}
      <ul className='hidden md:flex flex-row font-roboto gap-4 md:gap-6 lg:gap-8 text-sm md:text-base text-text'>
        <li className='cursor-pointer'>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className='cursor-pointer'>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className='cursor-pointer'>
          <ScrollLink to="portfolio" smooth={true} duration={500}>
            Portfolio
          </ScrollLink>
        </li>
        <li className='cursor-pointer'>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button
          className='text-text focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
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
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className='absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 font-roboto text-sm text-text shadow-lg md:hidden'>
          <li className='cursor-pointer'>
            <ScrollLink to="home" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Home
            </ScrollLink>
          </li>
          <li className='cursor-pointer'>
            <ScrollLink to="about" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              About
            </ScrollLink>
          </li>
          <li className='cursor-pointer'>
            <ScrollLink to="portfolio" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </ScrollLink>
          </li>
          <li className='cursor-pointer'>
            <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
