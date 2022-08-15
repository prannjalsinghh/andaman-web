import { items } from "../Assets/data";
import EachPackageCard from "./EachPackageCard";
const TypesPackages = (props)=>{

    return(
        <>
            <div>
                <h1>{props.heading}</h1>
                <div>
                    {items.map((each)=><EachPackageCard item={{heading:`${each.nights}Nights - ${each.days}Days`,info:`${each.places[0].time} ${each.places[0].place} - ${each.places[1].time} ${each.places[1].place} - ${each.places[2]?.time?each.places[2].time:''} ${each.places[2]?.place?each.places[2].place:''} `, TourCode:each.TourCode, url:each.url}}/>)}
                </div>
            </div>
        </>
    )
}
export default TypesPackages;