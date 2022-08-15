import Header from '../Components/Header';
import Footer from '../Components/Footer';
import EachWaterCard from '../Components/EachWaterCard';
import CommonDiv from '../Components/CommonDiv';

const Activities= ()=>{

    const item = [
        {
            url:"",
            heading:"Book Scuba Diving at Andaman Islands",
            info:"Book Scuba Diving at different locations of Port Blair, Havelock and Neil Islands and get loads of discount."
        },
        {
            url:"",
            heading:"Book Under Water Sea Walk at Andaman Islands",
            info:"Walk under the sea like you belong there, spend sometimes with beautiful fishes and get a glimpse of beautiful coral life."
        },
        {
            url:"",
            heading:"Book Parasailing in Andaman Islands",
            info:"Parasailing in Andaman Islands is a unique experience, the beauty of these Islands is mismarising from the above"
        },
        {
            url:"",
            heading:"Book Snorkeling and Glass Bottom boat rides",
            info:"Book Snorkeling, Glass bottom boat and other activities for watching underwater marine life."
        },
        {
            url:"",
            heading:"Book Kayaking tour in Andaman Islands",
            info:"One of the best adventure activity to enjoy natural beauty of dense mangrove forest of Andaman Islands."
        },
        {
            url:"",
            heading:"Book Jet ski Ride, Banana Ride and Speed Boat rides",
            info:"Other activities like Jet ski, Banana ride, Sofa ride and Speed boat rides to book at best price at Andaman Islands."
        },
    ]

    return(
        <>
            <Header/>
            <div className="flex justify-around mt-10">
                <EachWaterCard item={item[0]} />
                <EachWaterCard item={item[1]} />
                <EachWaterCard item={item[2]} />
            </div>
            <div className='flex justify-around mt-10'>
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
            <Footer/>
        </>
    )

}
export default Activities;