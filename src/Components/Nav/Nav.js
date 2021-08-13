import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav-menu">
      <ul className="list">
        <li>
          <NavLink exact to="/" className="myclass">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/local">Local</NavLink>
        </li>
        <li>
          <NavLink to="/server">Server</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
