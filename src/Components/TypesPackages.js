import { useLocation, } from "react-router-dom";
import { items } from "../Assets/data";
import Banner from "./Banner";
import EachPackageCard from "./EachPackageCard";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import QueryForm from "./QueryForm";
const TypesPackages = ()=>{
    const [isFormOpen, formToggleHandler] = useState(false);

    const queryFormOpenHandler = () => {
        formToggleHandler(true);
    };
    const queryFormCloseHandler = () => {
        formToggleHandler(false);
    };

    const location = useLocation();

    
 

    return(
        <>
        <Header/>
        <Banner url="https://seoimgak.mmtcdn.com/blog/sites/default/files/images/DSC04308.JPG"/>
            <div className="flex flex-col items-center gap-10 text-center">
                <h1 className="text-5xl text-orange-700 font-semibold m-auto mt-10">{location.state.id}</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-y-5 gap-x-10">
                    {items.map((each)=><EachPackageCard item={{heading:`${each.nights}Nights - ${each.days}Days ${location.state.id}`,info:`${each.places[0].time} ${each.places[0].place} - ${each.places[1].time} ${each.places[1].place} - ${each.places[2]?.time?each.places[2].time:''} ${each.places[2]?.place?each.places[2].place:''} `, TourCode:each.TourCode, url:each.url}}/>)}
                </div>
            </div>
            <button
            className="fixed top-1/2 text-white right-0 text-base p-2 rotate-fix"
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
export default TypesPackages;