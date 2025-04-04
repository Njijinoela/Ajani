import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-200 shadow-md">
      <nav className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/images/logo.jpeg" alt="Logo" className="h-10" />
        </div>

        <button
          className="md:hidden p-2 text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-orange-100 shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            className="absolute top-4 right-4 p-2 text-primary"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
          <ul className="flex flex-col space-y-6 p-8">
            <li>
              <Link
                to="/"
                className="text-primary hover:underline font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-primary hover:underline font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="text-primary hover:underline font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                TEAM
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className="text-primary hover:underline font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                ARTICLES
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary hover:underline font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                CONTACTS
              </Link>
            </li>
          </ul>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-primary hover:underline font-bold text-lg"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-primary hover:underline font-bold text-lg"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="text-primary hover:underline font-bold text-lg"
            >
              TEAM
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="text-primary hover:underline font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              ARTICLES
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-primary hover:underline font-bold text-lg"
            >
              CONTACTS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
