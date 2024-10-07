import React from "react";

/**
 * Navigation component that displays links to different sections of the site.
 *
 * @component
 * @example
 * return (
 *   <Nav />
 * )
 */
const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#features">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#about">
            About
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
