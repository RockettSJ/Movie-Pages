import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="top-header py-3">
      <nav className="container">
        <ul className="nav justify-content-center">
          <li className="px-4">
            <NavLink to="/" exact>
              Popular
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/now-playing" exact>
              Now Playing
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/upcoming" exact>
              Upcoming
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
