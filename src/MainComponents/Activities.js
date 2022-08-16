import Header from '../Components/Header';
import Footer from '../Components/Footer';
import EachWaterCard from '../Components/EachWaterCard';
import CommonDiv from '../Components/CommonDiv';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import QueryForm from '../Components/QueryForm';
import { useState } from 'react';

const Activities= ()=>{
    const [isFormOpen, formToggleHandler] = useState(false);

    const queryFormOpenHandler = () => {
        formToggleHandler(true);
    };
    const queryFormCloseHandler = () => {
        formToggleHandler(false);
    };

    const item = [
        {
            url:"https://img.veenaworld.com/wp-content/uploads/2021/06/Scuba-Diving-in-Andaman-Best-Time-Cost.jpeg",
            heading:"Book Scuba Diving at Andaman Islands",
            info:"Book Scuba Diving at different locations of Port Blair, Havelock and Neil Islands and get loads of discount."
        },
        {
            url:"http://www.andamantourism.org/wp-content/uploads/2017/07/walking.jpg",
            heading:"Book Under Water Sea Walk at Andaman Islands",
            info:"Walk under the sea like you belong there, spend sometimes with beautiful fishes and get a glimpse of beautiful coral life."
        },
        {
            url:"https://admin.banbanjara.com/public/frontend/uploads/product/1619004976310-2.jpg",
            heading:"Book Parasailing in Andaman Islands",
            info:"Parasailing in Andaman Islands is a unique experience, the beauty of these Islands is mismarising from the above"
        },
        {
            url:"https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/Coevr-for-Snorkeling-In-Andaman.jpg",
            heading:"Book Snorkeling and Glass Bottom boat rides",
            info:"Book Snorkeling, Glass bottom boat and other activities for watching underwater marine life."
        },
        {
            url:"https://uploads-ssl.webflow.com/5b56319971ac8c56a6a9d887/5ed748995c2d8d47161c3f69_Kayak%204-.jpg",
            heading:"Book Kayaking tour in Andaman Islands",
            info:"One of the best adventure activity to enjoy natural beauty of dense mangrove forest of Andaman Islands."
        },
        {
            url:"https://www.havelockislandbeachresort.com/medias/page/big/63/jet3.jpg",
            heading:"Book Jet ski Ride, Banana Ride and Speed Boat rides",
            info:"Other activities like Jet ski, Banana ride, Sofa ride and Speed boat rides to book at best price at Andaman Islands."
        },
    ]

    return(
        <>
            <Header/>
            <Banner url="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?cs=srgb&dl=pexels-pixabay-390051.jpg&fm=jpg"/>
            <Services item={ {heading:"Experience Water Sports & Activities with us".toUpperCase()}}/>
            <div className="flex sm:flex-row flex-col items-center gap-10 sm:gap-0 justify-around mt-10 ">
                <EachWaterCard item={item[0]} />
                <EachWaterCard item={item[1]} />
                <EachWaterCard item={item[2]} />
            </div>
            <div className='flex sm:flex-row flex-col items-center gap-10 sm:gap-0 justify-around mt-10 '>
                <EachWaterCard item={item[3]} />
                <EachWaterCard item={item[4]} />
                <EachWaterCard item={item[5]} />
            </div>
            <CommonDiv arr={[
            "Shore Scuba Diving: 3500",
            "Boat Scuba DIving: 4000",
            "Jet Skiing : 900",
            "Snorkelling: 1200",
            "Glass Bottom Boating:900",
            "Kayaking: 3500",
            "Parasailing: 4500",
            "Banana Boat rides : 1200",
            "Sea Kart: 3500",
            "Underwater Engagement: 4500"
        ]}
        title={"WATERSPORTS ACTIVITIES (APPLICABLE ONLY IF PRE-BOOKED)"} />
        <button
            className="fixed top-1/2 text-white right-0 text-xl p-2 rotate-fix"
            onClick={queryFormOpenHandler}
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
export default Activities;