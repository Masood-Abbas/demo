'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-[95%] mx-auto flex items-center justify-between py-4">
    <div className='flex items-center gap-10' >
      <div className="text-xl font-bold text-blue-800">Top Tier Travel</div>
      <div className="hidden md:flex items-center space-x-6 text-gray-700">
        <Link href="/hotels" className="hover:text-blue-600">
          Hotels
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>
        <Link href="/support" className="hover:text-blue-600">
          Support
        </Link>
      </div>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link
          href="/signup"
          className="border border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-50"
        >
          Sign up
        </Link>
        <Link
          href="/login"
          className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-900"
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-blue-800 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 z-50 md:hidden">
          <Link
            href="/hotels"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Hotels
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/support"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
          <Link
            href="/signup"
            className="border border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-900"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
