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
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'
import img8 from '../Assets/img8.jpg'
import Services from "./Services";
import footerBg from '../Assets/footerBg.jpg'


const Footer = () => 
{
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <>
        <Services item={{ heading:"Approved By:-"}}/>
        <ul className="grid lg:grid-cols-8 mt-5 gap-x-2 sm:grid-cols-4 grid-cols-4 items-center w-2/3 m-auto mb-5">
            <li><img className="sm:w-full " src={img1}/></li>
            <li><img className="sm:w-full " src={img2}/></li>
            <li><img className="sm:w-full " src={img3}/></li>
            <li><img className="sm:w-full " src={img4}/></li>
            <li><img className="sm:w-full " src={img5}/></li>
            <li><img className="sm:w-full " src={img6}/></li>
            <li><img className="sm:w-full " src={img7}/></li>
            <li><img className="sm:w-full " src={img8}/></li>
        </ul>
        <div style={{backgroundImage: `url(${footerBg})`,backgroundPosition: "bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} >
        <NewsLetter/>
        <div className={styles.footer}>
            <div className="grid md:flex grid-cols-2 md:grid-cols-1 gap-8">
                <div className={styles.quickLinks}>
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/aboutUs"><li>About Us</li></Link>
                        <Link to="/activities"><li>Water Sports</li></Link>
                        <Link to="/contactUs"><li>Contact Us</li></Link>
                     
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
            </div>
            <div className={styles.contactUs}>
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <ul>
                    <li><a href="tel:+919958377493"><span><LocalPhoneIcon/></span>+919958377493</a></li>
                    <li><a href="mailto:info@andamanoceantour.com"><span><EmailIcon/></span> info@andamanoceantour.com</a></li>
                    <li><span><LocationOnIcon/></span>Shop No 21 radhakrishna temple complex,JungliGhat,Port Blair, Andaman & Nicobar Islands 744103</li>
                </ul>
            </div>
        </div>
        </div>
        </>
    )

};

export default Footer;

