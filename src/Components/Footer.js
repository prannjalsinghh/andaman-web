import React from "react";
import styles from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => 
{
    return(
        <div className={styles.footer}>
            <div className={styles.quickLinks}>
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Honeymoon Package</li>
                    <li>Family Package</li>
                </ul>
            </div>
            <div className={styles.followUs}>
                <h3>Follow Us</h3>
                <ul>
                    <li><FacebookIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><YouTubeIcon/></li>
                    <li><LinkedInIcon/></li>
                </ul>
            </div>
            {/* <div className={styles.newsletter}>
                <h3>Weekly Newletter</h3>
                <input placeholder="Name"/>
                <input placeholder="Your Email"/>
                <button>SUBSCRIBE</button>
            </div> */}
            <div className="contactUs">
                <h3>Contact Us</h3>
                <ul>
                    <li><span><LocalPhoneIcon/></span>+919958377493</li>
                    <li><span><EmailIcon/></span> Info@andamanoceantour.com</li>
                    <li><span><LocationOnIcon/></span>Shop No 21 radhakrishna temple complex,JungliGhat,Port Blair, Andaman & Nicobar Islands 744103</li>
                </ul>
            </div>
        </div>
    )

};

export default Footer;

