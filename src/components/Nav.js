import React, { useState } from "react";
import logo from '../images/Logo.svg';

const Nav = ({ items }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      {/* mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* nav items */}
      <ul className={`nav-links  ${menuOpen ? "visible" : ""}`}>
        {items.map((item, index) => (
          <li key={index}>
            {item === 'HOME'?
            (<a href={`/`}>{item}</a>) : (<a href={`/${item}`}>{item}</a>) }
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
