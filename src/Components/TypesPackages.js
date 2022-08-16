import { useLocation } from "react-router-dom";
import { items } from "../Assets/data";
import Banner from "./Banner";
import EachPackageCard from "./EachPackageCard";
import Footer from "./Footer";
import Header from "./Header";
const TypesPackages = ()=>{

    const location = useLocation();
    console.log(location)

    return(
        <>
        <Header/>
        <Banner url="https://andamantourtravel.com/assets/img/banner-or3.jpg"/>
            <div className="flex flex-col items-center gap-10 text-center">
                <h1 className="text-5xl text-orange-700 font-semibold m-auto mt-10">{location.state.id}</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-y-5 gap-x-10">
                    {items.map((each)=><EachPackageCard item={{heading:`${each.nights}Nights - ${each.days}Days ${location.state.id}`,info:`${each.places[0].time} ${each.places[0].place} - ${each.places[1].time} ${each.places[1].place} - ${each.places[2]?.time?each.places[2].time:''} ${each.places[2]?.place?each.places[2].place:''} `, TourCode:each.TourCode, url:each.url}}/>)}
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default TypesPackages;