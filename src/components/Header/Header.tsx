import React from "react";
import "./Header.css";
import Nav from "./Nav";

/**
 * Header component that displays the logo and navigation menu.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
const Header: React.FC = () => {
  return (
    <header className="header page__header">
      <div className="header__wrapper wrapper">
        <div className="header__container">
          <div className="header__info">
            <h1 className="header__title title_h1">Fan Control</h1>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
