import React, { useState } from "react";
import "./navbar.css";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>D</span>ee
            <span>B</span>lurrr
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/about">about</NavLink>
            </li> */}
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.instagram.com/" target="avishkar">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=ES1XZ-N6w3A&ab_channel=NischayMalhan"
                target="_avishkar"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
