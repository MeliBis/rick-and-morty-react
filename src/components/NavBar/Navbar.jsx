import React from "react";
import { NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light mb-4">
        <div className="container">
        <NavLink to="/" className="fs-3 ubuntu text-primary navbar-brand">Rick and Morty </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav fs-5">
              <li className="nav-item">
                <NavLink  className="nav-link active" to="/">
                  Characters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/episodes">
                  Episodes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/location">
                  Location
                </NavLink>
              </li>
             
           
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
