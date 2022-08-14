import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import InfoIcon from '@mui/icons-material/Info';

const AboutUs = ()=>{
    return(
        <>
            <Header/>
            <Banner url="https://wallpaperaccess.com/full/1921683.jpg"></Banner>
            <Services item={{heading:"About Us", icon:<InfoIcon/> , info:""}}></Services>
            <div className='flex flex-col sm:flex-row w-3/4 m-auto gap-10 items-center'>
                <div>
                    <h1 className='text-xl text-orange-600 font-medium'>Welcome</h1>
                    <p>
                        Andaman Tour is a part of My Tourguru Online Pvt. Ltd . It is a complete destination management company teamed by hardcore professionals with average experience of 10 years in domestic and international travel, approved by the Government of India .We are based out in Port Blair with branch office in Delhi .

                        Andaman Tour and Travels is one of the most reliable travel agent when it comes to choosing the best travel agents in Andaman or Best Andaman Tour Packages. We offer attractive Andaman Honeymoon Tour Package, which have been designed while keeping all your needs in mind. Since our inception, we have been striving to deliver an unrivalled service which at par with all your expectations and demands.

                        Our vast experience has enabled us to handle all your travel arrangements with almost competence and professionalism. Our customer-centric services are aimed at fulfilling all your whims and desires effortlessly.best travel agent in andaman nicobar islands for connections list of top company at good local tour operators review trek

                    </p>
                </div>
                
                <img className=' w-full sm:w-1/2 h-3/4' src="https://wallpaperaccess.com/full/1921683.jpg"/>
            </div>
            
            <Footer/>
        </>
    )

    
}
export default AboutUs;