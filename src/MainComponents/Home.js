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
import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import { FcCustomerSupport, FcMoneyTransfer } from "react-icons/fc";
import { BiCustomize } from "react-icons/bi";
import Pro from "../Assets/icons/pro.svg";
import Marquee from "react-fast-marquee";
import EachPackageHomeDiv from "./EachPackageHomeDiv";
const Home = () => {
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

  const items = [
    {
      heading: "6 NIGHTS-7 DAYS",
      url: "https://static.toiimg.com/photo/68814397.cms",
      info: "(3 N Port Blair+2 N Havelock+1N Neil (Shaheed Dweep))",
      TourCode: "MTG 012",
    },
    {
      heading: "5 NIGHTS-6 DAYS",
      url: "https://static.toiimg.com/photo/68814397.cms",
      info: "(2 N Port Blair+2 N Havelock+1N Neil (Shaheed Dweep))",
      TourCode: "MTG 004",
    },
    {
      heading: "5 NIGHTS-6 DAYS",
      url: "https://static.toiimg.com/photo/68814397.cms",
      info: "(2 N Port Blair+2 N Havelock+1N Neil (Shaheed Dweep))",
      TourCode: "MTG 006",
    },
    {
      heading: "4 NIGHTS-5 DAYS",
      url: "https://static.toiimg.com/photo/68814397.cms",
      info: "(2 N Port Blair+1 N Havelock+1N Neil (Shaheed Dweep))",
      TourCode: "MTG 002",
    },
    {
      heading: "6 NIGHTS-7 DAYS",
      url: "https://static.toiimg.com/photo/68814397.cms",
      info: "(3 N Port Blair+2 N Havelock+1N Neil (Shaheed Dweep))",
      TourCode: "MTG 007",
    },
    {
      heading: "3 NIGHTS-4 DAYS",
      url: "https://static.toiimg.com/photo/68814397.cms",
      info: "(2 N Port Blair+1 N Havelock)",
      TourCode: "MTG 001",
    },
    {
      heading: "4 NIGHTS-5 DAYS",
      url: "https://static.toiimg.com/photo/68814397.cms",
      info: "(2 N Port Blair+2 N Havelock)",
      TourCode: "MTG 003",
    },
    {
      heading: "5 NIGHTS-6 DAYS",
      url: "https://static.toiimg.com/photo/68814397.cms",
      info: "(3 N Port Blair+1 N Havelock+1N Neil (Shaheed Dweep))",
      TourCode: "MTG 005",
    },
  ];
  return (
    <React.Fragment>
      <div className="App">
        <Header />

        <HomeVideo />
        <SearchBar />

        <Marquee pauseOnHover={true} speed={30} className="mt-10" gradient={false}>

          <EachPackageHomeDiv heading="Family Packages" url="https://www.welgrowgroup.com/img.php?file=welgrowgroupuploadsNew/package/images/pkg_156982254180_travel-by-family.jpg"/>
          <EachPackageHomeDiv heading="Group Packages" url="https://www.smartertravel.com/wp-content/uploads/2017/08/Group-Travel-101-1400x500.jpg"/>
          <EachPackageHomeDiv heading="Corporate Packages" url="https://www.anjnaglobal.com/img/dubai-corporate-tour.jpg"/>
          <EachPackageHomeDiv heading="Honeymoon Packages" url="https://www.holidayrepresentations.com/images/theme_honeymoon.webp"/>
          <EachPackageHomeDiv heading="Budget Packages" url="https://www.india.com/wp-content/uploads/2018/08/fam-1-dne.jpg"/>

        </Marquee>

        <Services
          item={{
            heading: "Services We Provide",
            info: "We are the first company in Andaman to bring transparent pricing in the Andaman Islands tour. That is the reason we provide the solution for Hotel, Cab , and ferry. we today hold the biggest and the most comprehensive team for Andaman Tours in the islands",
            icon: <SnowboardingIcon sx={{ fontSize: 40, color: blue[700] }} />,
          }}
        />
        <div className="flex flex-col gap-5 sm:flex-row text-center justify-between mt-20">
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
        <Services
          item={{
            heading: "Best Sellers",
            icon: <MilitaryTechIcon sx={{ fontSize: 40, color: blue[700] }} />,
            info: "Below Andaman Packages are one of the best selling holiday packages of Andaman. No matter if you are going to Andaman for a honeymoon, budget trip, leisure or group tour.",
          }}
        />
        <div className="flex flex-col items-center sm:flex sm:flex-row justify-center gap-4 mt-24 mb-32">
          <EachPackageCard item={items[0]} />
          <EachPackageCard item={items[1]} />
          <EachPackageCard item={items[2]} />
          <EachPackageCard item={items[3]} />
        </div>
        <div
          className="flex flex-col  sm:gap-20 gap-5"
          style={{
            backgroundImage: `url('https://wallpaperaccess.com/full/1921682.jpg')`,
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
              info: "The below Andaman holiday packages contains sightseeing, hotels, transfers, tickets, ground support and breakfast. Basically, the below packages takes care of everything required during your trip right from the time you arrive at Port Blair airport to the time you depart. If you need any further customization to the Andaman tour packages then our holiday expert will be happy to make necessary changes to the itinerary",
              icon: (
                <HomeRepairServiceSharpIcon
                  sx={{ fontSize: 40, color: blue[700] }}
                />
              ),
            }}
          />
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-around">
            <EachPackageCard item={items[0]} />
            <EachPackageCard item={items[1]} />
            <EachPackageCard item={items[2]} />
          </div>

          <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-around">
            <EachPackageCard item={items[3]} />
            <EachPackageCard item={items[4]} />
            <EachPackageCard item={items[5]} />
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-around">
            <EachPackageCard item={items[6]} />
            <EachPackageCard item={items[7]} />
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
        <Footer />
      </div>
      <button
        className="fixed top-1/2 right-0 text-xl p-2 rotate-fix"
        onClick={queryFormOpenHandler}
      >
        Query Form
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
