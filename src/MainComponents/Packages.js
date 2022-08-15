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
      <div className="flex flex-col gap-2 items-center text-center w-3/4 m-auto mt-10">
        <h2 className=" text-3xl font-bold text-orange-600">{item.heading}</h2>
        <p className="font-md text-gray-800">{item.info}</p>
        {item.places?.map((each) => (
          <p className="font-md text-orange-600">
            {each.place}-
            <span className="font-md text-black">{each.time}</span>
          </p>
        ))}
        <p className="font-md">
          ({item.days}DAYS / {item.nights}NIGHTS)
        </p>
        <p className="font-md">{`(${item.TourCode})`}</p>
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
      {item.itinerary?.map((detail)=> <Itinerary itinerary={{day:detail.day , heading:detail.heading , info:detail.info}}/>)}
      
      <Services item={{ heading: "ACCOMMODATION USED" }} />
      <CustomizedTables
        head={ item.accommodation?.head }
        rows = {item.accommodation?.rows}
      />
      <div className="flex items-center">
        <Link to="/contactUs"><button className=" bg-orange-600 rounded-md m-auto mt-10 p-3">BOOK NOW</button></Link>

      </div>
       
      <marquee behavior="scroll" direction="left" scrollamount="10" onmouseover="this.stop();" className="h-full mt-10" onmouseout="this.start();">
      <div className="flex">
        {mainArray.map((each)=><EachPackageCard item={{heading:`${each.nights}Nights - ${each.days}Days`,info:`${each.places[0]?.time} ${each.places[0]?.place} - ${each.places[1]?.time} ${each.places[1]?.place} `, TourCode:each.TourCode, url:each.url}}/>)}
      </div>
     
      </marquee>

      
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
                "Booked morning Slot so that under water visibility perfect.",
                "Sealed Package mouth pieces for better hygiene.",
                "Fully Sanitized face mask to ensure COVID 19 guidelines are followed.",
                "Regular Check-up of Oxygen Cylinder filters so that under water risk can be minimized.",
                "Unlimited training time given before we take you under water.",
                "Min 25 Min underwater with Photo’s and Video’s",
                "Best Quality Scuba diving in Entire Island."
            ]} title={"Benefits of Pre Booking of Scuba Diving:-"} />

            <CommonDiv arr={["If cancellations are made 30 days before the start date of the trip, 25% of Total Package Cost will be charged as cancellation fees.<",
          "If cancellations are made 15-30 days before the start date of the trip, 50% of Total Package Cost will be charged as cancellation fees.<",
          "If cancellations are made within 0-15 days before the start date of the trip, 100% of Total Package Cost will be charged as cancellation fees.<",
          "In case of unforeseen weather conditions or government restrictions, certain activities may be cancelled and in such cases ,we will try our best to provide an alternate feasible activity. However no refund will be provided for the same.<",
          "100% cancelation would be charged from the total booking amount in case of last minute booking cancellation due to flight cancellation, any natural calamity, and change in flight schedule/ferry due to technical/weather and high tides and sea conditions.<",
          "In case of Lockdown in Andaman due to Covid, will provide a credit note which a traveller can redeem within 1 year from the date of issuance of Credit Note. In such Sinario revised package will be provided as per the current applicable season and off season rate. Do check the final cost with the reservation team.<",]} 
          title={"Cancellation Policy"} />

      
        <CommonDiv arr = {["Rates are valid till March 2023",
        "Hotel will be provided from the above list however if none of the hotel is available on the given date then similar alternative option will be provided.",
        "Standard, Deluxe, Super Deluxe, Premium, and Luxury is the hotel category and not the room category. Costing has been taken on the base category of the room, any up gradation in the room or Hotel category due to Non availability will incurred additional cost which has to be borne by the guest",
        "All water activities are subject to weather conditions. Complementary items are free of cost if not done due to any reason then no refund will be provided.",
        "Ferry sailing is subject to weather conditions. Alternate arrangements will be made in case sailing does not take place due to weather or payload restriction. However, Mytourguru will not be responsible for refunding any amount due to non-sailing of ferry and will be governed by our cancellation policy. The itinerary flow is subject to change.",
        "In case due to any operational reason or due to bad weather condition, if Private Ferry is not operating will provide inland transfer in Govt Ferry. ",
        "Cancellation charges as per company policy",
        "In case we are not able to provide the same hotels as mentioned, then we shall provide similar alternate properties, change in the cost if any will be advised.",
        "Ferry / Cruise Operations are purely subjected to Govt. Clearance.",
         "Union Territory “Andaman & Nicobar Islands” is under restricted area category. Please carry valid photo Identity proof issued by Govt. of India (Driving License, Aadhaar Card, and Passport)",
        "All the hotels at Port Blair, Havelock and Neil Island have early check out 0800hrs. Guests having late afternoon flights may book additional tour accordingly.",
        "Our Executive may change your itinerary depending on the weather condition and availability of ferry and same will be updated to you daily basis."]}
        title={"Terms and Conditions"} />
  
      
            <CommonDiv arr={[
                "In Andaman mobile networks are BSNL, AIRTEL & VODAFONE and no other networks are supported.",
                "All foreign nationals and Indians staying abroad holding passport of different countries (PIO/OCI) needs to register themselves on arrival on Port Blair Airport (Emigration) which should have valid India visa or obtain RAP - Restricted Area Permit, which is valid for 30 days of stay in Andaman’s.",
                "Our executive will hold the placard outside the airport exit gate.",
            ]}
            title={"Points to be noted while travelling Andaman"} />
        
       <CommonDiv arr={["All asymptomatic passengers who have been vaccinated with both doses of COVID 19 Vaccine and 15 days have been lapse since the administration of second dose of the vaccine and are in possession of the final vaccination certificate issued through the COWIN portal are exempted from mandatory requirement of carrying negative RTPCR Report to travel to Port Blair from Mainland. And also such passengers will be excepted from undergoing additional RTPCR test on Arrival at Port Blair Airport. Such passengers shall also have to produce the ID card / Documents",
        "Its mandatory to carry an Covid RT-PCR negative report sampled within 48 hrs of travel date, ",
        "Upon tested negative, you are free to travel within South Andaman (Port Blair- havelock- Neil island) and in case tested positive, Standard Isolation process to be followed. ",
        "Kindly carry few copies of your Covid Report and Photo ID for convenience",
        "We require all guest’s ID proof (Pan Card not accepted) upon confirmation of booking to ensure all services booked on time. ",
        "Our team is committed to work on physical contactless environment and our local team",
        "Our vehicles will be sanitized as per administration/ government guidelines and will be",
        "All guests are required to wear face masks in public areas/ inside vehicle and to sanitise",
        "Temperature checks will be conducted every time a guest board the vehicle. Should the temperature be higher than 99 degrees, along with other symptoms, including but not limited to coughing, sneezing and shortness of breath, they will be assisted to visit the nearest hospital or healthcare facility. ",
           " We look forward to welcoming your guests to our pristine islands, we would be happy to share more details, please feel free to mail/ call"]}
           title={"Covid-19 Guidelines"} />

        <CommonDiv arr={[
          "Bella Bay Luxury Dinner Cruise in Port Blair- 5 Course Dinner with live action packed entertainment   (3500 Per Person)",
          "Photography Pack- Get your memories captured by our professional photo artists",
          "Scuba Certification Courses",
          "Game Fishing.",
          "Day/ Night Kayaking: adventure in the Mangroves of Havelock"
          
        ]}
        title={"OPTIONAL ACTIVITIES AND TOURS:-"} />

      
      <Footer />
    </>
  );
};
export default Packages;
