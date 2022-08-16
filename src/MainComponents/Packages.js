import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomizedTables from '../Components/Table'
import EachPackageCard from "../Components/EachPackageCard";
import {items} from "../Assets/data";
import Itinerary from "../Components/ItineraryinDetail";
import CommonDiv from "../Components/CommonDiv";
import Marquee from "react-fast-marquee";
import QueryForm from "../Components/QueryForm";
import ImageGallery from 'react-image-gallery';
import "/node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "/node_modules/react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    id:"Heavelock",
    original: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Havelock_Island%2C_Bay%2C_Andaman_Islands.jpg/1280px-Havelock_Island%2C_Bay%2C_Andaman_Islands.jpg',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Havelock_Island%2C_Bay%2C_Andaman_Islands.jpg/1280px-Havelock_Island%2C_Bay%2C_Andaman_Islands.jpg',
    description:"Heavelock Island"
  },
  {
    id:"Neil",
    original: 'https://cdn.pixabay.com/photo/2017/06/28/16/48/amazing-2451315_1280.jpg',
    thumbnail: 'https://cdn.pixabay.com/photo/2017/06/28/16/48/amazing-2451315_1280.jpg',
    description:"Neil Island"
  },
  {
    id:"CellularJail",
    original: "https://cdn.pixabay.com/photo/2019/02/11/04/25/jail-3988719_1280.jpg",
    thumbnail: 'https://cdn.pixabay.com/photo/2019/02/11/04/25/jail-3988719_1280.jpg',
    description:"Cellular Jail"
  },
  {
    id:"ElephantBeach",
    original:"https://cdn.pixabay.com/photo/2019/01/13/17/27/beach-3930858_1280.jpg",
    thumbnail:"https://cdn.pixabay.com/photo/2019/01/13/17/27/beach-3930858_1280.jpg",
    description:"Elephant Beach"
  },
  {
    id:"Cruise",
    original:"https://cdn.experienceandamans.com/images/nautika-cruise-andaman-islands.jpeg",
    thumbnail:"https://cdn.experienceandamans.com/images/nautika-cruise-andaman-islands.jpeg",
    description:"Cruise Port Blair"
  },
  {
    id:"Bartang",
    original:"https://static2.tripoto.com/media/filter/tst/img/307258/TripDocument/1583678149_dsc_0379.jpg",
    thumbnail:"https://static2.tripoto.com/media/filter/tst/img/307258/TripDocument/1583678149_dsc_0379.jpg",
    description:"Bartang Island"
  },
  {
    id:"RossIsland",
    original:"https://cdn.pixabay.com/photo/2017/05/03/19/08/railay-bay-2281883_960_720.jpg",
    thumbnail:"https://cdn.pixabay.com/photo/2017/05/03/19/08/railay-bay-2281883_960_720.jpg",
    description:"Ross Island"
  }
]


const Packages = () => {
  const location = useLocation();
  const [item, setItem] = useState([]);
  const [imageArr,setImages] =useState([]);
  const [mainArray,setLoadedArray] =useState([]);
  function sort() {
     setItem(items.find((x) => x.TourCode === location.state.id));
  }

  function imageHandler(){
    let loadedImageArray=[];
    item.images?.map((each)=>{
      for(let key in images){
        if(images[key].id === each){
          loadedImageArray.push({original:images[key].original,thumbnail:images[key].thumbnail,description:images[key].description})
        }
      }
    })
    setImages(loadedImageArray);
  }
  useEffect(() => {
    sort();
    allPackages();
    imageHandler();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location.state.id, item.images]);

  const [isFormOpen, formToggleHandler] = useState(false);

  const queryFormOpenHandler = () => {
    formToggleHandler(true);
  };
  const queryFormCloseHandler = () => {
    formToggleHandler(false);
  };

  const allPackages = ()=>{
    let loadedArray = [];
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

  return (
    <>
      <Header />
      
      <Banner url="https://wallpaperaccess.com/full/1921694.jpg" />
      <div className="flex flex-col gap-2 items-center text-center w-3/4 m-auto mt-10">
        <h2 className=" text-3xl font-bold text-orange-600">{item.heading}</h2>
        <p className="font-bold text-gray-600">{item.info}</p>
        {item.places?.map((each) => (
          <p className="font-md text-orange-600">
            {each.place}-
            <span className="font-bold text-black">{each.time}</span>
          </p>
        ))}
        <p className="font-bold">
          ({item.days}DAYS / {item.nights}NIGHTS)
        </p>
        <p className="font-bold">{`(${item.TourCode})`}</p>
      </div>
      <Services item={{ heading: "HIGHLIGHTS" }} />
      <div className="sm:w-1/2 w-full m-auto">
        <ImageGallery 
        items={imageArr}
        
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={true}
        disableArrowKeys={true}
        autoPlay={true}
        slideDuration={1000}
        slideInterval={2000}
        />
      </div>

      <Services
        item={{
          heading: "ITERNARY OVERVIEW"}}/>

      {item.places?.map((each) => (
          <p className="font-bold text-gray-600 text-center ">
            {each.time}-{each.place}
          </p>
        ))}

      <CustomizedTables
        head={ item.table1?.head }
        rows = {item.table1?.rows}
      />

      <Services item={{ heading: "ITERNARY IN DETAIL" }} />
      {item.itinerary?.map((detail)=> <Itinerary itinerary={{day:detail.day , heading:detail.heading , info:detail.info}}/>)}
      
      <Services item={{ heading: "ACCOMMODATION USED" }} />
      <CustomizedTables
        head={ item.accommodation?.head }
        rows = {item.accommodation?.rows}
      />

    <CommonDiv arr={[ "Accommodation in rooms as given at hotels in Port Blair—Havelock and Neil on Double or triple sharing basis.",    
           " Meal Plan: CPAI (Room + Breakfast)  ",
           " Assistance at all arrival and departure point.  ",
           " Welcome cake on Arrival ",
            "Complimentary Candid Photography    ",
            "Sightseeing in private air-conditioned vehicle as per the itinerary at Port Blair—Havelock--Neil including Airport Pick up and Drop. " ,  
            "All side Private Cruise charges Included - Port Blair – Neil – Havelock –Port blair.    ",
            "(NAUTIKA//MAK//Sea Link//Green Ocean//Aashi).   ",
            "Sightseeing as per the itinerary.  ",
            "Travel assistance by Mytourguru Experts in all the islands. ",
            "5% GST Included" ]} title={"The Prices Are Inclusive of:"} />

       
            <CommonDiv arr={[
            "Any Airfare, Train fare, Overland Journey which is not mentioned in the Itinerary.  ",
            "If Govt Cruise is not issued due to availability then Pvt Cruise will be issued on fare difference. ",
            "Any Medical/rescue evacuation due to mishaps.   ",
            "Any personal nature items like Laundry, bar bills, table bills, camera fee, tips or any other item. ",
            "Vehicle not at disposal at any of the islands.  ",
            "Any extra excursion or sightseeing apart from suggested tour itinerary. ",
            "Cost incidental to any change in the itinerary/ stay on account of flight cancellation due to bad weather, ill health, roadblocks and/or any factors beyond control     ",
            "Peak Season Supplement of 15% applicable from 15th Dec to 15th Jan  " ]} title={"The Prices are exclusive "}/>

<CommonDiv arr={[
        "Standard- Rs 300 per person Per Meal",
        "Deluxe – Rs 650per person",
        "Super Deluxe – Rs 850 per person"  
        
      ]} title={"MEAL SUPPLEMENT FOR LUNCH / DINNER"} subtitle={"( Meal supplement Per Person Per Meal.)"} />

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
      title={"OPTIONAL CHARGES"}
      subtitle={"WATERSPORTS ACTIVITIES (APPLICABLE ONLY IF PRE-BOOKED)"} />

      <div className="flex items-center justify-center">
        <Link to="/contactUs"><button className=" bg-orange-600 rounded-md m-auto mt-10 p-3">BOOK NOW</button></Link>

      </div>
       
     <Marquee pauseOnHover={true} speed={50} className="mt-10" gradient={false}>
      <div className="flex gap-2">
        {mainArray.map((each)=><EachPackageCard item={{heading:`${each.nights}Nights - ${each.days}Days`,info:`${each.places[0].time} ${each.places[0].place} - ${each.places[1].time} ${each.places[1].place} - ${each.places[2]?.time?each.places[2].time:''} ${each.places[2]?.place?each.places[2].place:''} `, TourCode:each.TourCode, url:each.url}}/>)}
      </div>
      </Marquee>

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

      
      <Footer />
    </>
  );
};
export default Packages;
