import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <div className="nav-wrapper purple darken-1">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/" className="text">
                Online Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
