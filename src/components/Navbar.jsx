// src/components/Navbar.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#2f2f2f] text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-2"> {/* Réduit l'espace entre l'image et le texte */}
          <img src="/img_decentrep2.webp" alt="DecentRep Logo" className="w-10 h-10" />
          <Link to="/" className="text-2xl font-semibold hover:text-blue-400"> {/* Lien vers la page d'accueil */}
            DecentRep
          </Link>
        </div>

        {/* Navbar Links */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/create" className="text-white hover:text-blue-400 mx-4">Create</Link>
          <Link to="/request" className="text-white hover:text-blue-400 mx-4">Request</Link>
          {/* Changer Graph Visualization pour un lien externe */}
          <a 
            href="https://graph.i7n.thp-lab.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400 mx-4"
          >
            Graph Visualization
          </a>
          <Link to="/team" className="text-white hover:text-blue-400 mx-4">Team</Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
