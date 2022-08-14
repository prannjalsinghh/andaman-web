import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomizedTables from '../Components/Table'
import EachPackageCard from "../Components/EachPackageCard";
import {items} from "../Assets/data";
import Itinerary from "../Components/ItineraryinDetail";

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
      {/* {item.itinerary.map((detail)=> <Itinerary itinerary={{day:detail.day , heading:detail.heading , info:detail.info}}/>)} */}
      
      <Services item={{ heading: "ACCOMMODATION USED" }} />
      <CustomizedTables
        head={ item.accommodation?.head }
        rows = {item.accommodation?.rows}
      />
      <div className="flex items-center">
        <button className=" bg-orange-600 rounded-md m-auto mt-10 p-3">BOOK NOW</button>

      </div>
       
      <marquee behavior="scroll" direction="left" scrollamount="10" onmouseover="this.stop();" className="h-full mt-10" onmouseout="this.start();">
      <div className="flex">
        {mainArray.map((each)=><EachPackageCard item={{heading:`${each.nights}Nights - ${each.days}Days`,info:`${each.places[0]?.time} ${each.places[0]?.place} - ${each.places[1]?.time} ${each.places[1]?.place} `, TourCode:each.TourCode, url:each.url}}/>)}
      </div>
     
      </marquee>
      <div>
        <h1>The Prices Are <span>Inclusive</span>of:</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <h1>The Prices Are <span>Exclusive</span>of:</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <h1>Cancelation Policy</h1>
        <ul>
          <li>If cancellations are made 30 days before the start date of the trip, 25% of Total Package Cost will be charged as cancellation fees.</li>
          <li>If cancellations are made 15-30 days before the start date of the trip, 50% of Total Package Cost will be charged as cancellation fees.</li>
          <li>If cancellations are made within 0-15 days before the start date of the trip, 100% of Total Package Cost will be charged as cancellation fees.</li>
          <li>In case of unforeseen weather conditions or government restrictions, certain activities may be cancelled and in such cases ,we will try our best to provide an alternate feasible activity. However no refund will be provided for the same.</li>
          <li>100% cancelation would be charged from the total booking amount in case of last minute booking cancellation due to flight cancellation, any natural calamity, and change in flight schedule/ferry due to technical/weather and high tides and sea conditions.</li>
          <li>In case of Lockdown in Andaman due to Covid, will provide a credit note which a traveller can redeem within 1 year from the date of issuance of Credit Note. In such Sinario revised package will be provided as per the current applicable season and off season rate. Do check the final cost with the reservation team.</li>
        </ul>
      </div>
      <div>
        <h1>Terms And Conditions</h1>
        <ul>
          <li>Rates are valid till March 2023</li>
          <li>Hotel will be provided from the above list however if none of the hotel is available on the given date then similar alternative option will be provided.</li>
          <li>Standard, Deluxe, Super Deluxe, Premium, and Luxury is the hotel category and not the room category. Costing has been taken on the base category of the room, any up gradation in the room or Hotel category due to Non availability will incurred additional cost which has to be borne by the guest</li>
          <li>All water activities are subject to weather conditions. Complementary items are free of cost if not done due to any reason then no refund will be provided.</li>
          <li>Ferry sailing is subject to weather conditions. Alternate arrangements will be made in case sailing does not take place due to weather or payload restriction. However, Mytourguru will not be responsible for refunding any amount due to non-sailing of ferry and will be governed by our cancellation policy. The itinerary flow is subject to change.</li>
          <li>In case due to any operational reason or due to bad weather condition, if Private Ferry is not operating will provide inland transfer in Govt Ferry. </li>
          <li>Cancellation charges as per company policy</li>
          <li>In case we are not able to provide the same hotels as mentioned, then we shall provide similar alternate properties, change in the cost if any will be advised.</li>
          <li>Ferry / Cruise Operations are purely subjected to Govt. Clearance.
          Union Territory “Andaman & Nicobar Islands” is under restricted area category. Please carry valid photo Identity proof issued by Govt. of India (Driving License, Aadhaar Card, and Passport)</li>
          <li>All the hotels at Port Blair, Havelock and Neil Island have early check out 0800hrs. Guests having late afternoon flights may book additional tour accordingly.</li>
          <li>Our Executive may change your itinerary depending on the weather condition and availability of ferry and same will be updated to you daily basis.</li>
        </ul>
      </div>
      <div>
        <h2>Points to be noted while travelling Andaman</h2>
        <ul>
          <li>In Andaman mobile networks are BSNL, AIRTEL & VODAFONE and no other networks are supported.</li>
          <li>All foreign nationals and Indians staying abroad holding passport of different countries (PIO/OCI) needs to register themselves on arrival on Port Blair Airport (Emigration) which should have valid India visa or obtain RAP - Restricted Area Permit, which is valid for 30 days of stay in Andaman’s.</li>
          <li>Our executive will hold the placard outside the airport exit gate.</li>

        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Packages;
