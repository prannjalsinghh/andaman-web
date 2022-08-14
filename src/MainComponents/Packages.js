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

  const items = [
    {
        url:"https://images.news18.com/ibnlive/uploads/2022/04/shutterstock_1064304320-16504498334x3.jpg",
      TourCode: "MTG 012",
      heading: "Amazing Neil & Havelock",
      info: "A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
      places: [
        { place: "PORTBLAIR", time: "3NIGHT" },
        { place: "Havelock", time: "02 NIGHT" },
        { place: "NEIL(SHAHEED DWEEP)", time: "01 NIGHT" },
      ],
      days: "4",
      nights: "5",
    },
    {
        url:"https://static.toiimg.com/thumb/69007547/andaman.jpg?width=1200&height=900",
      TourCode: "MTG 004",
      heading: "Havelock(Swaraj Dweep) Delight",
      info: "A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
      places: [
        { place: "PORTBLAIR", time: "2NIGHT" },
        { place: "Havelock", time: "02 NIGHT" },
        { place: "NEIL(SHAHEED DWEEP)", time: "01 NIGHT" },
      ],
      days: "7",
      nights: "6",
    },
    {
        url:"https://media.istockphoto.com/photos/scenic-sea-beach-at-havelock-islands-andaman-india-at-sunset-picture-id1040379102?k=20&m=1040379102&s=612x612&w=0&h=TWWIWrQsFZBMi8TEJk1qZZzqIhSgQB4gtMwHvNpTzKg=",
      TourCode: "MTG 006",
      heading: "Amazing Andaman with Baratang",
      info: "A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
      places: [
        { place: "PORTBLAIR", time: "2NIGHT" },
        { place: "Havelock", time: "02 NIGHT" },
        { place: "NEIL(SHAHEED DWEEP)", time: "01 NIGHT" },
      ],
      days: "6",
      nights: "5",
    },
    {
        url:"https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2021/10/19/andaman-nicobar.jpg",
      TourCode: "MTG 002",
      heading: "Amazing Andaman with Jolly Buoy",
      info: "A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
      places: [
        { place: "PORTBLAIR", time: "02NIGHT" },
        { place: "Havelock", time: "02 NIGHT" },
        { place: "NEIL(SHAHEED DWEEP)", time: "01 NIGHT" },
      ],
      days: "5",
      nights: "4",
    },
    {
        url:"https://static.toiimg.com/photo/68814397.cms",
      TourCode: "MTG 007",
      heading: "Andaman Delight with Jolly Buoy",
      info: "A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
      places: [
        { place: "PORTBLAIR", time: "3NIGHT" },
        { place: "Havelock", time: "02 NIGHT" },
        { place: "NEIL(SHAHEED DWEEP)", time: "01 NIGHT" },
      ],
      days: "7",
      nights: "6",
    },
    {
        url:"https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover_13-jan1.jpg",
      TourCode: "MTG 001",
      heading: "Andaman Delight with Baratang",
      info: "A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
      places: [
        { place: "PORTBLAIR", time: "2NIGHT" },
        { place: "Havelock", time: "01 NIGHT" },
      ],
      days: "4",
      nights: "3",
    },
    {
        url:"https://images.unsplash.com/photo-1586053226626-febc8817962f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8&w=1000&q=80",
      TourCode: "MTG 003",
      heading: "Magical Andaman",
      info: "A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
      places: [
        { place: "PORTBLAIR", time: "2NIGHT" },
        { place: "Havelock", time: "02 NIGHT" },
      ],
      days: "5",
      nights: "4",
    },
    {
        url:"https://s01.sgp1.cdn.digitaloceanspaces.com/article/157373-zcpsrpnnec-1617976605.jpg",
      TourCode: "MTG 005",
      heading: "Magical Andaman with Jolly Buoy",
      info: "A perfect program to hop in from one island to other. This trip takes you to the best-rated attraction in Andaman Islands during your short trip to the Amazing Andaman Island. Explore white sand beaches, boat rides during this trip.",
      places: [
        { place: "PORTBLAIR", time: "3NIGHT" },
        { place: "Havelock", time: "01 NIGHT" },
        { place: "NEIL(SHAHEED DWEEP)", time: "01 NIGHT" },
      ],
      days: "6",
      nights: "5",
      table1: {
        head:["Days", "Overview"],
        rows:[
        {
          day: "Day 1",
          details:
            "Airport Pick Up. Later Trip to Cellular Jail Light and Sound Show",
        },
        {
          day:"Day 2",
          details:"Visit Ross Island and North Bay Island"
        },
        {
          day:"Day 3",
          details:"Port Blair to Neil. Laxmanpur Beach, Bharatpur Beach, Natural Coral Bridge.",

        },
        {
          day:"Day 4",
          details:"Neil Island to Havelock Island in Ferry and Later Trip to Radhanagar Beach"
        },
        {
          day:"Day 5",
          details:"Kalapathar Beach and Later Depart from Havelock Island to Port Blair.",
        }
        ,{
          day:"Day 6",
          details:"Airport Drop"
        }

      ],
    },
    },
  ];

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
      <Services item={{ heading: "Ferry Timing" }} />
      <Footer />
    </>
  );
};
export default Packages;
