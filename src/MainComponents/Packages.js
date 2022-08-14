import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Packages = (props)=>{
    const location = useLocation();
    const [item,setItem]  = useState([])
    function sort(){
        setItem(items.find((x)=>x.TourCode === location.state.id));
    }
    useEffect(()=>{
        sort();
    },[]);

    const items=[
        {
            TourCode:'MTG 012',
            heading:"Amazing Neil & Havelock",
            info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
            places: [{place:"PORTBLAIR",time:"3NIGHT"},{place:"Havelock",time:"02 NIGHT"},{place:"NEIL(SHAHEED DWEEP)",time:"01 NIGHT"}],
            days:"4",
            nights:"5"
        },
        {
            TourCode:'MTG 004',
            heading:"Havelock(Swaraj Dweep) Delight",
            info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
            places: [{place:"PORTBLAIR",time:"2NIGHT"},{place:"Havelock",time:"02 NIGHT"},{place:"NEIL(SHAHEED DWEEP)",time:"01 NIGHT"}],
            days:"7",
            nights:"6"
        },
        {
            TourCode:'MTG 006',
            heading:"Amazing Andaman with Baratang",
            info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
            places: [{place:"PORTBLAIR",time:"2NIGHT"},{place:"Havelock",time:"02 NIGHT"},{place:"NEIL(SHAHEED DWEEP)",time:"01 NIGHT"}],
            days:"6",
            nights:"5"
        },
        {
            TourCode:'MTG 002',
            heading:"Amazing Andaman with Jolly Buoy",
            info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
            places: [{place:"PORTBLAIR",time:"02NIGHT"},{place:"Havelock",time:"02 NIGHT"},{place:"NEIL(SHAHEED DWEEP)",time:"01 NIGHT"}],
            days:"5",
            nights:"4"
        },
        {
            TourCode:'MTG 007',
            heading:"Andaman Delight with Jolly Buoy",
            info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
            places: [{place:"PORTBLAIR",time:"3NIGHT"},{place:"Havelock",time:"02 NIGHT"},{place:"NEIL(SHAHEED DWEEP)",time:"01 NIGHT"}],
            days:"7",
            nights:"6"
        },
        {
            TourCode:'MTG 001',
            heading:"Andaman Delight with Baratang",
            info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
            places: [{place:"PORTBLAIR",time:"2NIGHT"},{place:"Havelock",time:"01 NIGHT"}],
            days:"4",
            nights:"3"
        },
        {
            TourCode:'MTG 003',
            heading:"Magical Andaman",
            info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
            places: [{place:"PORTBLAIR",time:"2NIGHT"},{place:"Havelock",time:"02 NIGHT"}],
            days:"5",
            nights:"4"
        },
        {
            TourCode:'MTG 005',
            heading:"Magical Andaman with Jolly Buoy",
            info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
            places: [{place:"PORTBLAIR",time:"3NIGHT"},{place:"Havelock",time:"01 NIGHT"},{place:"NEIL(SHAHEED DWEEP)",time:"01 NIGHT"}],
            days:"6",
            nights:"5"
        },
    ]
    return(
        <>
            <Header/>
            <Banner url="https://img.kantipurholidays.com/ContentImages/IMG__82bacd2d-2094-42e7-819e-5860405b81af-0-1941x1132.jpeg"/>
            <div>
                <h2>{item.heading}</h2>
                <p>{item.info}</p>
                {item.places?.map((each)=><p>{each.place}<span>{each.time}</span></p>)}
                <p>({item.days}DAYS / {item.nights}NIGHTS)</p>
                <p>{`(${item.TourCode})`}</p>
            </div>
            <Services  item={{heading:"HIGHLIGHTS"}}/>
            <Services item={{heading:"ITERNARY OVERVIEW" , info:"2 Nights Port Blair – 2 Night Havelock Island"}}/>
            <Services item={{heading:"ITERNARY IN DETAIL"}}/>
            <Services item={{heading:"ACCOMMODATION USED"}}/>
            <Services item={{heading:"Ferry Timing"}}/>
            <Footer/>
        </>
    )
}
export default Packages;