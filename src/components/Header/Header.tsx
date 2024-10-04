import React from "react";
import "./Header.css";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Fan Control</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
