import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1023px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 1023px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);


    useEffect(()=>{
        if(matches && menuOpen){
            setMenuOpen(false);
        }
    },[menuOpen,matches])

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                navbar
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && !matches ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About Us</a> </li>
                        <li><a>Hotel & Resorts</a></li>
                        <li><a>Packages</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
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