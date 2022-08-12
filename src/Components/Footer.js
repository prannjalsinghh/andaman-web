import React from "react";
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
    return(
        <div style={{backgroundImage: `url(https://wallpaperaccess.com/full/1921683.jpg)`,backgroundRepeat:"no-repeat"}} >
        <NewsLetter/>
        <div className={styles.footer}>
            <div className={styles.quickLinks}>
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Honeymoon Package</li>
                    <li>Family Package</li>
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
                    <li><span><LocalPhoneIcon/></span>+919958377493</li>
                    <li><span><EmailIcon/></span> Info@andamanoceantour.com</li>
                    <li><span><LocationOnIcon/></span>Shop No 21 radhakrishna temple complex,JungliGhat,Port Blair, Andaman & Nicobar Islands 744103</li>
                </ul>
            </div>
        </div>
        </div>
    )

};

export default Footer;

