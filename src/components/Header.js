import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="top-header">
      <nav>
        <ul className="nav nav-tabs">
          <li>
            <NavLink to="/" exact>
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink to="/now-playing" exact>
              Now Playing
            </NavLink>
          </li>
          <li>
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
