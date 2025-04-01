import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-orange-200 shadow-md">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-6 py-4 justify-center">
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
