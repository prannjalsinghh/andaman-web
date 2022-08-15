import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NewsLetter from "./NewsLetter";

const Footer = () => 
{
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <div style={{backgroundImage: `url(https://wallpaperaccess.com/full/1921683.jpg)`,backgroundRepeat:"no-repeat"}} >
        <NewsLetter/>
        <div className={styles.footer}>
            <div className={styles.quickLinks}>
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/aboutUs"><li>About Us</li></Link>
                </ul>
            </div>
            <div className={styles.followUs}>
                <h3 className="text-xl font-semibold">Follow Us</h3>
        
                <ul>
                    <li><FacebookIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><YouTubeIcon/></li>
                    <li><LinkedInIcon/></li>
                </ul>
            </div>
            <div className={styles.contactUs}>
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <ul>
                    <li><a href="tel:+919958377493"><span><LocalPhoneIcon/></span>+919958377493</a></li>
                    <li><a href="mailto:Info@andamanoceantour.com"><span><EmailIcon/></span> Info@andamanoceantour.com</a></li>
                    <li><span><LocationOnIcon/></span>Shop No 21 radhakrishna temple complex,JungliGhat,Port Blair, Andaman & Nicobar Islands 744103</li>
                </ul>
            </div>
        </div>
        </div>
    )

};

export default Footer;

