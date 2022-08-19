import React, { useEffect, useState } from "react";
import   BasicMenu from './DropDown';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "../Assets/icons/logo.png";
import Services from "./Services";

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

    const openHandler = ()=>{
        setisOpen(true);
        console.log("hi");
    }

  const closeHandler = () => {
    setisOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        
        <Link to='/'>
        <div className="flex items-center">
        <Services call="header" item={{heading:"ANDAMAN", icon:<p className="sm:text-sm  text-sm font-semibold">OCEAN TOUR</p>}}/>
        </div>
        </Link>
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
            < BasicMenu headerCloseHandler = {closeHandler} matches={matches} item={{heading:"Packages" , options:["Family Package" , "Honeymoon Package","Group Package","Corporate Package","Budget Package"]}}/>
            
            <li>
              <Link to="/activities">Water Sports</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
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
