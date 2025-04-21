'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center relative z-30 font-serif">
      <div className="flex justify-center items-center">
        <Image src={'/logo.png'} alt="logo" width={70} height={80} className="rounded-full border-2 border-blue-500" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="#" className="hover:text-blue-500 cursor-pointer">HOME</Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-blue-500 cursor-pointer">ABOUT ME</Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-blue-500 cursor-pointer">MY PROJECTS</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-blue-500 cursor-pointer">CONTACT ME</Link>
        </li>
      </ul>

      {/* Toggle Button for Small Screens */}
      <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} className="text-white" /> : <FiMenu size={24} className="text-white" />}
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
{isOpen && (
  <div className="fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg transform transition-transform duration-300 ease-in-out p-6 md:hidden">
    <ul className="space-y-4 text-white">
      <li>
        <Link href="#" className="block py-2 text-lg font-semibold text-white">HOME</Link>
      </li>
      <li>
        <Link href="#about" className="block py-2 text-lg font-semibold text-white">ABOUT ME</Link>
      </li>
      <li>
        <Link href="#projects" className="block py-2 text-lg font-semibold text-white">MY PROJECTS</Link>
      </li>
      <li>
        <Link href="#contact" className="block py-2 text-lg font-semibold text-white">CONTACT ME</Link>
      </li>
    </ul>
  </div>
)}


      {/* Background Overlay for Mobile Menu */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
}
