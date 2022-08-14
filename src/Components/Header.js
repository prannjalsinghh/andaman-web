import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../Assets/icons/logo.png";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1023px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1023px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (matches && menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen, matches]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
  };

  const openHandler = () => {
    setisOpen(true);
    console.log("hi");
  };

  const closeHandler = () => {
    setisOpen(false);
    console.log("khushi");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <img src={Logo} alt="logo" style={{width:'100px',height:"100px",objectFit:'contain'}} className={classes.header__logo} />
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && !matches ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>{" "}
            </li>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <Link to="/ferries">Ferries</Link>
            </li>
            <li>
              <Link to="/activities">Activities</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
