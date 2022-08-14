import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Services from "../Components/Services";

const Packages = (props)=>{
    return(
        <>
            <Header/>
            <Banner url="https://img.kantipurholidays.com/ContentImages/IMG__82bacd2d-2094-42e7-819e-5860405b81af-0-1941x1132.jpeg"/>
            <div>
                <h2>{props.items.heading}</h2>
                <p>{props.items.info}</p>
                <p>{props.items.place}<span>{`(${props.items.time})`}</span></p>
                <p>{props.items.number}<span>{props.items.day}</span></p>
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