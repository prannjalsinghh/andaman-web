import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import QueryForm from '../Components/QueryForm';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const AboutUs = ()=>{

    const [isFormOpen, formToggleHandler] = useState(false);

    const queryFormOpenHandler = () => {
        formToggleHandler(true);
    };
    const queryFormCloseHandler = () => {
        formToggleHandler(false);
    };

    return(
        <>
            <Header/>
            <Banner url="https://wallpaperaccess.com/full/1921683.jpg"></Banner>
            <Services item={{heading:"About Us", icon:<InfoIcon/> , info:""}}></Services>
            <div className='flex flex-col sm:flex-row w-3/4 m-auto gap-10 items-center'>
                <div>
                    <h1 className='text-xl text-orange-600 font-medium'>Welcome</h1>
                    <p>
                     A division of andamanoceantours is Andaman Tour. It is a full-service destination management organisation authorised by the Government of India, staffed by ardent experts with an average of 10 years of local and international travel expertise. Our main office is in Port Blair, and we also have a branch there. When it comes to selecting the top travel agencies in Andaman or the best Andaman tour packages, Andaman Tour and Travels is one of the most dependable travel agencies. We provide alluring Andaman Honeymoon Tour Packages that were created with your demands in mind. Since the beginning, we have worked hard to provide unmatched service that meets all of your requirements and expectations. Our extensive experience has allowed us to manage all of your travel plans with an almost professional level of skill. Our customer-focused services are designed to effortlessly satisfy all of your whims and needs. Best connection-oriented travel agency in the Andaman & Nicobar Islands top companies at trustworthy local tour operators reviews trip.

                    </p>
                </div>
                
                <img className=' w-full sm:w-1/2 h-3/4' src="https://wallpaperaccess.com/full/1921683.jpg"/>
            </div>

            <button
            className="fixed top-1/2 right-0 text-xl p-2 rotate-fix"
            onClick={queryFormOpenHandler}
            >
            Query Form
            </button>
            {isFormOpen && (
                <div className="">
                <QueryForm closeHandler={queryFormCloseHandler} />
                </div>
            )}
            
            <Footer/>
        </>
    )

    
}
export default AboutUs;