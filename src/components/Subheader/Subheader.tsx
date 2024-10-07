import React from "react";
import "./Subheader.css";

let facebook = require("../../icons/web/facebook.ico");
let instagram = require("../../icons/web/instagram.ico");
let twitter = require("../../icons/web/twitter.ico");
/**
 * Subheader component that contains navigation links and social media links.
 *
 * @component
 * @example
 * return (
 *   <Subheader />
 * )
 */
const Subheader: React.FC = () => {
  return (
    <section className="subheader page__section">
      <div className="subheader__wrapper wrapper">
        <div className="subheader__container">
          <nav className="subnav">
            <ul className="subnav__list">
              <li className="subnav__item">
                <a className="subnav__link" href="#home">
                  Home
                </a>
              </li>
              <li className="subnav__item">
                <a className="subnav__link" href="#features">
                  Features
                </a>
              </li>
              <li className="subnav__item">
                <a className="subnav__link" href="#about">
                  About
                </a>
              </li>
              <li className="subnav__item">
                <a className="subnav__link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="socials__icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="socials__icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="socials__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subheader;
