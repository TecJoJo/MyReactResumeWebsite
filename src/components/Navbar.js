import React from "react";
import { navLinks } from "../data";
import { Link } from "react-router-dom";
import Hamburger from "./HamburgerMenu";

function Navbar() {
  return (
    <section className="nav-center">
      <Link to={"/"} className="link-component">
        <h1 className="signature">Coded By Yao</h1>
      </Link>
      <ul className="nav-links-container">
        <li className="nav-link">
          <Link to="/" className="link-component">
            <h3>Home</h3>
          </Link>
        </li>
        {navLinks.map((link, index) => {
          return (
            <li key={index} className="nav-link">
              <Link to={`/${link}`} className="link-component">
                <h3>{link}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
      <Hamburger />
    </section>
  );
}

export default Navbar;
