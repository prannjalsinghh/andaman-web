import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import QueryForm from '../Components/QueryForm';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import CommonDiv from '../Components/CommonDiv';

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
            <Banner url="https://img.freepik.com/premium-photo/bleak-stone-staircase-jungle-old-presbyterian-church-ruins-ross-island-port-blair-andaman-nicobar-india-old-abandoned-staircase-entrance-abandoned-building-dilapidated-house_431724-2549.jpg?w=2000"></Banner>
            <Services item={{heading:"About Us", icon:<InfoIcon/> , info:""}}></Services>
            
            <div className='flex flex-col sm:flex-row w-3/4 m-auto gap-10 items-center'>
                <div>
                    <h1 className='text-xl text-orange-600 font-medium'>Welcome</h1>

                    <CommonDiv title="Andaman Ocean Tours is the largest Tour Operator in Andaman" 
                    arr={["Andaman Ocean Tours is a local tour operator in Andaman Islands who provides complete tour packages to people who are looking to visit Andamans.",

                        "We are not travel agents who resells tours for a commission. We are the operators who provide the tours that you book online with travel agents and OTA's.",
                        
                        "Booking directly with a local Tour Operator ensures that you don't have to pay anything extra for the complete trip" , "We provide 24X7 customer service" , "Customers are our priority and we look forward to welcoming your guests to our pristine islands, we would be happy to share more details, please feel free to mail/ call"]}
                    />

                    <CommonDiv title="Benefits:" />

                    <CommonDiv subtitle="✓ Lowest Hotel Rates:" 
                    arr={["In business for 7 years, Andaman Ocean Tours has closely partnered up with over 50+ hotels in Andaman to offer discounted rates of minimum 40%, which is not even available on large hotel websites."
                    ,"This lowers the package cost for minimum 33% savings, compared to other agents."]}/>

                    <CommonDiv subtitle="✓ Group Booked Flights:" 
                    arr={[" Andaman Ocean Tours books flights in bulk to ensure lowest possible rates of max 5,999/- from Chennai and Kolkata to Andaman, and amazing rates for other states, which are simply not available anywhere else."
                    ,"This lowers the package cost for minimum 10% savings, compared to other agents."]}/>

                    <CommonDiv subtitle="✓ Self-Owned Cars and Boats:" 
                    arr={["With more than 15 cars and 3 boats, Andaman Ocean Tours provides everything from it’s own fleet, which reduces the package cost drastically."
                    ,"This lowers the package cost for minimum 23% savings, compared to other agents who lease vehicles."]}/>

                    <CommonDiv subtitle="✓ All Inclusive Packages:" 
                    arr={["All packages come with everything including cars, hotels, meals, flights, boats, permits and guides to ensure complete comfort and amazing trip."]}/>

                    <CommonDiv subtitle="‍✓ Guaranteed Savings:" 
                    arr={["We guarantee minimum 20% savings on every tour package when compared with other agents, because of the above mentioned factors."]}/>

                    <CommonDiv subtitle="✓ Get a package directly from the biggest tour operator and wholesaler:" 
                    arr={["As a travel wholesaler, we provide packages to large agencies who resell our packages to you","Book directly from us to enjoy maximum discounts without having to pay any commissions and additional taxes."]}/>

                    <CommonDiv subtitle="✓ Limited slots:" 
                    arr={["We cater to a limited number of guests per month to ensure smooth travel, ENQUIRE NOW to avoid missing out on great offers, that won’t come back."]}/>
                    
                </div>
                

            </div>

            <button
            className="fixed top-1/2 text-white right-0 text-xl p-2 rotate-fix"
            onClick={queryFormOpenHandler}
            style={{zIndex:"10000"}}
            >
            Enquire Now
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