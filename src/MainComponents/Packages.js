import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Services from "../Components/Services";


const Packages = (props)=>{
    const items={
        TourCode:'MTG-004',
        heading:"Amazing Neil & Havelock",
        info:"A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
        places: [{place:"PORTBLAIR",time:"2NIGHT"},{place:"NEIL(SHAHEED DWEEP)",time:"01 NIGHT"}],
        days:"4",
        nights:"5"
    }
    // const location = useLocation();
    // location.state.id
    return(
        <>
            <Header/>
            <Banner url="https://img.kantipurholidays.com/ContentImages/IMG__82bacd2d-2094-42e7-819e-5860405b81af-0-1941x1132.jpeg"/>
            <div>
                <h2>{props.items.heading}</h2>
                <p>{props.items.info}</p>
                <p>{props.items.place}<span>{props.items.time}</span></p>
                <p>({props.itens.days}DAYS / {props.items.nights}NIGHTS)</p>
                <p>{`(${props.items.TourCode})`}</p>
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