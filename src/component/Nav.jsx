// src/components/Nav.jsx
import React, { useState, useEffect } from "react";
import { FaBrain } from "react-icons/fa6";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ferme le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Ajoute un effet de défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Cours", path: "/cours" },
    { name: "Exercices", path: "/exercices" },
    { name: "Quiz", path: "/quiz" },
    { name: "Paramètres", path: "/parametres" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo avec animation subtile */}
        <Link 
          to="/" 
          className="flex items-center group"
          aria-label="Accueil"
        >
          <FaBrain className="text-blue-600 text-2xl transition-transform group-hover:rotate-45 duration-500" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Vitali
          </span>
        </Link>

        {/* Menu mobile */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Menu navigation"
        >
          {isOpen ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <IoIosMenu className="text-2xl" />
          )}
        </button>

        {/* Navigation Links */}
        <div 
          className={`absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent md:shadow-none shadow-lg transition-all duration-300 ease-out md:transition-none ${
            isOpen 
              ? "top-full opacity-100 visible translate-y-0" 
              : "top-0 opacity-0 invisible -translate-y-4 md:opacity-100 md:visible md:translate-y-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center py-4 md:py-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name} className="w-full md:w-auto">
                  <Link
                    to={link.path}
                    className={`block py-3 px-6 md:py-2 md:px-4 text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                      isActive
                        ? "text-blue-600 font-semibold md:border-b-2 md:border-blue-500"
                        : "text-gray-700"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* Bouton CTA avec animation */}
            <li className="mt-2 md:mt-0 md:ml-4 w-full md:w-auto px-4 md:px-0">
              <Link
                to="/register"
                className="block text-center px-6 py-3 md:py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-medium"
              >
                Commencer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}