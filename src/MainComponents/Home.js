import Header from "../Components/Header";
import HomeVideo from "../Components/HomeVideo";
import Footer from "../Components/Footer";
import QueryForm from "../Components/QueryForm.js";
import EachPackageCard from "../Components/EachPackageCard";
import Services from "../Components/Services";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import { blue, green } from "@mui/material/colors";
import ChotuDiv from "../Components/ChotuDiv";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import SailingIcon from "@mui/icons-material/Sailing";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FlightTakeoff from "@mui/icons-material/FlightTakeoff";
import Key from "@mui/icons-material/Key";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import HomeRepairServiceSharpIcon from "@mui/icons-material/HomeRepairServiceSharp";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState , useEffect} from "react";
import SearchBar from "../Components/SearchBar";
import { FcCustomerSupport, FcMoneyTransfer } from "react-icons/fc";
import { BiCustomize } from "react-icons/bi";
import Pro from "../Assets/icons/pro.svg";
import Marquee from "react-fast-marquee";
import EachPackageHomeDiv from "./EachPackageHomeDiv";
import {items} from '../Assets/data';
import banner1 from '../Assets/banner1.jpg';
import banner2 from '../Assets/banner2.jpg';
import banner3 from '../Assets/banner3.svg';
import packagesBg from '../Assets/packagesBg.jpeg'
import {Link} from 'react-router-dom';

const Home = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };
  const [isFormOpen, formToggleHandler] = useState(false);

  const queryFormOpenHandler = () => {
    formToggleHandler(true);
  };
  const queryFormCloseHandler = () => {
    formToggleHandler(false);
  };
  const arr = [
    {
      heading: "FAMILY PACKAGES",
      url: "https://media.istockphoto.com/photos/happy-family-running-on-beach-picture-id1137373430?k=20&m=1137373430&s=612x612&w=0&h=RnzI-4Yx1eD-YDolsCFxWZ2TVIOHWL-ecNoOrQj7Yp8=",
      info: "In the end, kids won’t remember that fancy toy you bought them, they will remember the time you spent with them.",
    },
    {
      heading: "HONEYMOON PACKAGES",
      url: "https://www.jaisuntourism.com/images/international-honeymoon-packages-from-coimbatore.jpg",
      info: "Love is the food of life. Travel is dessert",
    },
  ];

 
  return (
    <React.Fragment>
      <div className="App">
        <Header />

      <div className="-mt-24">
        <HomeVideo />
        </div>
        <SearchBar class={stickyClass} />

        

        <Services
          item={{
            heading: "Services We Provide",
            info: "We are the first company in Andaman to bring transparent pricing in the Andaman Islands tour. That is the reason we provide the solution for Hotel, Cab , and ferry. we today hold the biggest and the most comprehensive team for Andaman Tours in the islands",
            icon: <SnowboardingIcon sx={{ fontSize: 40, color: blue[700] }} />,
          }}
        />
        <div className="flex flex-col gap-5 sm:flex-row text-center justify-between mt-20 mb-20">
          <ChotuDiv
            item={{
              icon: <FlightTakeoff sx={{ fontSize: 40, color: blue[700] }} />,
              heading: "FLIGHTS",
              info: "Book Special Pre Purchased flights from Delhi, Mumbai, etc. Get the lowest fare of all the sector.",
              isButton: true,
            }}
          />
          <ChotuDiv
            item={{
              icon: <LocalTaxiIcon sx={{ fontSize: 40, color: blue[700] }} />,
              heading: "CABS",
              info: "We have our own fleet of transportation in Andaman. With professional and friendy drivers.",
              isButton: true,
            }}
          />
          <ChotuDiv
            item={{
              icon: <Key sx={{ fontSize: 40, color: blue[700] }} />,
              heading: "HOTELS",
              info: "Get the best hotel rate of Andaman with us. We have pre-purchased room inventary.",
              isButton: true,
            }}
          />
          <ChotuDiv
            item={{
              icon: <SailingIcon sx={{ fontSize: 40, color: blue[700] }} />,
              heading: "FERRY",
              info: "Book Govt and Private ferry for interisland transfers at a competative cost.",
              isButton: true,
            }}
          />
        </div>
        <Services item={{heading: "MOST POPULAR PACKAGES"}}/> 
        <Marquee pauseOnHover={true} speed={80} className="mt-10" gradient={false}>

          <EachPackageHomeDiv heading="Family Packages" url="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5JTIwdHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
          <EachPackageHomeDiv heading="Group Packages" url="https://www.smartertravel.com/wp-content/uploads/2017/08/Group-Travel-101-1400x500.jpg"/>
          <EachPackageHomeDiv heading="Corporate Packages" url="https://www.anjnaglobal.com/img/dubai-corporate-tour.jpg"/>
          <EachPackageHomeDiv heading="Honeymoon Packages" url="https://www.holidayrepresentations.com/images/theme_honeymoon.webp"/>
          <EachPackageHomeDiv heading="Budget Packages" url="https://www.india.com/wp-content/uploads/2018/08/fam-1-dne.jpg"/>

        </Marquee>
        <Services
          item={{
            heading: "Best Sellers",
            icon: <MilitaryTechIcon sx={{ fontSize: 40, color: blue[700] }} />,
            info: "Below Andaman Packages are one of the best selling holiday packages of Andaman. No matter if you are going to Andaman for a honeymoon, budget trip, leisure or group tour.",
          }}
        />
        <div className="flex flex-col items-center sm:flex sm:flex-row justify-center gap-4 mt-24 mb-32">
          <EachPackageCard item={{heading:`${items[2].nights}Nights - ${items[2].days}Days`,info:`${items[2].places[0].time} ${items[2].places[0].place} - ${items[2].places[1].time} ${items[2].places[1].place} - ${items[2].places[2]?.time?items[2].places[2].time:''} ${items[2].places[2]?.place?items[2].places[2].place:''} `, TourCode:items[2].TourCode, url:items[2].url}}/>
          <EachPackageCard item={{heading:`${items[3].nights}Nights - ${items[3].days}Days`,info:`${items[3].places[0].time} ${items[3].places[0].place} - ${items[3].places[1].time} ${items[3].places[1].place} - ${items[3].places[2]?.time?items[3].places[2].time:''} ${items[3].places[2]?.place?items[3].places[2].place:''} `, TourCode:items[3].TourCode, url:items[3].url}}/>
          <EachPackageCard item={{heading:`${items[4].nights}Nights - ${items[4].days}Days`,info:`${items[4].places[0].time} ${items[4].places[0].place} - ${items[4].places[1].time} ${items[4].places[1].place} - ${items[4].places[2]?.time?items[4].places[2].time:''} ${items[4].places[2]?.place?items[4].places[2].place:''} `, TourCode:items[4].TourCode, url:items[4].url}}/>
          <EachPackageCard item={{heading:`${items[6].nights}Nights - ${items[6].days}Days`,info:`${items[6].places[0].time} ${items[6].places[0].place} - ${items[6].places[1].time} ${items[6].places[1].place} - ${items[6].places[2]?.time?items[6].places[2].time:''} ${items[6].places[2]?.place?items[6].places[2].place:''} `, TourCode:items[6].TourCode, url:items[6].url}}/>
        </div>
        <div
          className="flex flex-col  sm:gap-20 gap-5"
          style={{
            backgroundImage: `url(${packagesBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "bottom",
            maxWidth: "100vw",
          }}
        >
          <Services
            item={{
              heading: "Packages",
              icon: (
                <HomeRepairServiceSharpIcon
                  sx={{ fontSize: 40, color: "white" }}
                />
              ),
            }}
          />
          <p className="text-center text-yellow-500 font-semibold">
          The below Andaman holiday packages contains sightseeing, hotels, transfers, tickets, ground support and breakfast. Basically, the below packages takes care of everything required during your trip right from the time you arrive at Port Blair airport to the time you depart. If you need any further customization to the Andaman tour packages then our holiday expert will be happy to make necessary changes to the itinerary
          </p>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-around">
          <EachPackageCard item={{heading:`${items[0].nights}Nights - ${items[0].days}Days`,info:`${items[0].places[0].time} ${items[0].places[0].place} - ${items[0].places[1].time} ${items[0].places[1].place} - ${items[0].places[2]?.time?items[0].places[2].time:''} ${items[0].places[2]?.place?items[0].places[2].place:''} `, TourCode:items[0].TourCode, url:items[0].url}}/>
          <EachPackageCard item={{heading:`${items[1].nights}Nights - ${items[1].days}Days`,info:`${items[1].places[0].time} ${items[1].places[0].place} - ${items[1].places[1].time} ${items[1].places[1].place} - ${items[1].places[2]?.time?items[1].places[2].time:''} ${items[1].places[2]?.place?items[1].places[2].place:''} `, TourCode:items[1].TourCode, url:items[1].url}}/>
          <EachPackageCard item={{heading:`${items[2].nights}Nights - ${items[2].days}Days`,info:`${items[2].places[0].time} ${items[2].places[0].place} - ${items[2].places[1].time} ${items[2].places[1].place} - ${items[2].places[2]?.time?items[2].places[2].time:''} ${items[2].places[2]?.place?items[2].places[2].place:''} `, TourCode:items[2].TourCode, url:items[2].url}}/>
          </div>

          <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-around">
          <EachPackageCard item={{heading:`${items[3].nights}Nights - ${items[3].days}Days`,info:`${items[3].places[0].time} ${items[3].places[0].place} - ${items[3].places[1].time} ${items[3].places[1].place} - ${items[3].places[2]?.time?items[3].places[2].time:''} ${items[3].places[2]?.place?items[3].places[2].place:''} `, TourCode:items[3].TourCode, url:items[3].url}}/>
          <EachPackageCard item={{heading:`${items[4].nights}Nights - ${items[4].days}Days`,info:`${items[4].places[0].time} ${items[4].places[0].place} - ${items[4].places[1].time} ${items[4].places[1].place} - ${items[4].places[2]?.time?items[4].places[2].time:''} ${items[4].places[2]?.place?items[4].places[2].place:''} `, TourCode:items[4].TourCode, url:items[4].url}}/>
          <EachPackageCard item={{heading:`${items[5].nights}Nights - ${items[5].days}Days`,info:`${items[5].places[0].time} ${items[5].places[0].place} - ${items[5].places[1].time} ${items[5].places[1].place} - ${items[5].places[2]?.time?items[5].places[2].time:''} ${items[5].places[2]?.place?items[5].places[2].place:''} `, TourCode:items[5].TourCode, url:items[5].url}}/>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-around pb-5">
          <EachPackageCard item={{heading:`${items[6].nights}Nights - ${items[6].days}Days`,info:`${items[6].places[0].time} ${items[6].places[0].place} - ${items[6].places[1].time} ${items[6].places[1].place} - ${items[6].places[2]?.time?items[6].places[2].time:''} ${items[6].places[2]?.place?items[6].places[2].place:''} `, TourCode:items[6].TourCode, url:items[6].url}}/>
          <EachPackageCard item={{heading:`${items[7].nights}Nights - ${items[7].days}Days`,info:`${items[7].places[0].time} ${items[7].places[0].place} - ${items[7].places[1].time} ${items[7].places[1].place} - ${items[7].places[2]?.time?items[7].places[2].time:''} ${items[7].places[2]?.place?items[7].places[2].place:''} `, TourCode:items[7].TourCode, url:items[7].url}}/>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <Services
            item={{
              heading: "Why Choose Us",
              icon: <TaskAltIcon sx={{ fontSize: 40, color: green["A700"] }} />,
            }}
          />
          <div className="flex flex-col sm:flex-row text-center">
            <ChotuDiv
              item={{
                heading: "RELIABLE SERVICES",
                icon: <HandshakeIcon sx={{ fontSize: 40, color: blue[700] }} />,
                info: "Expect a prompt response at every step of the way, and we will exceed all your expectations with our dedicated services.",
                isButton: false,
              }}
            />
            <ChotuDiv
              item={{
                heading: "TRAINED EXPERTS",
                icon: <PersonIcon sx={{ fontSize: 40, color: blue[700] }} />,
                info: "Our dynamic group of individuals always go the extra mile to provide you with the best travel solutions with immense expertise.",
                isButton: false,
              }}
            />
            <ChotuDiv
              item={{
                heading: "24x7 CUSTOMER SERVICES",
                icon: (
                  <FcCustomerSupport
                    style={{ fontSize: 50, color: blue[700] }}
                  />
                ),
                info: "We present one of the most reliable & attentive customer services, where the main priority lies in 100% customer satisfaction.",
                isButton: false,
              }}
            />
          </div>
          <div className="flex flex-col sm:flex-row text-center">
            <ChotuDiv
              item={{
                heading: "POCKET-FRIENDLY RATES",
                icon: (
                  <FcMoneyTransfer style={{ fontSize: 40, color: blue[700] }} />
                ),
                info: "You can rest assured that we offer the most competitive prices but do not make any compromises on the quality of services.",
                isButton: false,
              }}
            />
            <ChotuDiv
              item={{
                heading: "CUSTOMISED PACKAGES",
                icon: <BiCustomize style={{ fontSize: 40, color: blue[700] }} />,
                info: "In addition to attractive travel packages, we also offer the option of customised packages with round the clock booking services.",
                isButton: false,
              }}
            />
            <ChotuDiv
              item={{
                heading: "PROFESSIONAL GUIDANCE",
                icon: <img src={Pro} />,
                info: "Explore the several exotic destinations in this enthralling island under our competent guidance and have an experience of a lifetime.",
                isButton: false,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col p-5 md:p-10 gap-5 mt-10 items-center md:flex-row  sm:justify-around md:w-10/12 m-auto">
          <Link to="/contactUs"><img className="w-full md:w-2/5 " src={banner3}/></Link>
          <Link to="/contactUs"><img className="w-full md:w-2/5 " src={banner1}/></Link>
          <Link to="/contactUs"><img className="w-full md:w-2/5 " src={banner2}/></Link>
        </div>
        <Footer />
      </div>
      <button
        className="fixed top-1/2 right-0 text-white text-xl p-2 rotate-fix"
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
    </React.Fragment>
  );
};

export default Home;
