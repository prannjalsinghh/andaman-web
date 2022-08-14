import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomizedTables from '../Components/Table'
import EachPackageCard from "../Components/EachPackageCard";

const Packages = () => {
  const location = useLocation();
  const [item, setItem] = useState([]);
  const [mainArray,setLoadedArray] =useState([]);
  function sort() {
    setItem(items.find((x) => x.TourCode === location.state.id));
  }
  useEffect(() => {
    sort();
    allPackages();
  }, []);



  const allPackages = ()=>{
    let loadedArray = [];
    console.log(item);
    for(let key in items){
        if(items[key].TourCode===item.TourCode){
            continue;
        }
        else{
            loadedArray.push(items[key])
        }
    }
    setLoadedArray(loadedArray);
  }
  const infoHandler=()=>{

  }


  return (
    <>
      <Header />
      <Banner url="https://img.kantipurholidays.com/ContentImages/IMG__82bacd2d-2094-42e7-819e-5860405b81af-0-1941x1132.jpeg" />
      <div>
        <h2>{item.heading}</h2>
        <p>{item.info}</p>
        {item.places?.map((each) => (
          <p>
            {each.place}
            <span>{each.time}</span>
          </p>
        ))}
        <p>
          ({item.days}DAYS / {item.nights}NIGHTS)
        </p>
        <p>{`(${item.TourCode})`}</p>
      </div>
      <Services item={{ heading: "HIGHLIGHTS" }} />

      <Services
        item={{
          heading: "ITERNARY OVERVIEW",
          info: "2 Nights Port Blair – 2 Night Havelock Island",
        }}
      />

      <CustomizedTables
        head={ item.table1?.head }
        rows = {item.table1?.rows}
      />

      <Services item={{ heading: "ITERNARY IN DETAIL" }} />
      <Services item={{ heading: "ACCOMMODATION USED" }} />

      <marquee behavior="scroll" direction="left" scrollamount="10" onmouseover="this.stop();" className="h-full" onmouseout="this.start();">
      <div className="flex">
        {mainArray.map((each)=><EachPackageCard item={{heading:`${each.nights}Nights - ${each.days}Days`,info:`${each.places[0]?.time} ${each.places[0]?.place} - ${each.places[1]?.time} ${each.places[1]?.place} `, TourCode:each.TourCode, url:each.url}}/>)}
      </div>
      </marquee>

      <CustomizedTables
        head={ accommodation?.head }
        rows = {accommodation?.rows}
      />


      <Services item={{ heading: "Ferry Timing" }} />
      <CustomizedTables
        head={ item.table3?.head }
        rows = {item.table3?.rows}
      />

      <Footer />
    </>
  );
};
export default Packages;
