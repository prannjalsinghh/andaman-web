import React from "react";
import { Divider } from "@mui/material";
const Services = (props) => {
  return (
    <div className={`flex flex-col ${props.call==="header"?" ": "items-center gap-2"} text-center  m-auto mt-10  mb-5`}>
      <h1 className={`   ${props.call==="header"?"text-3xl sm:text-4xl text-white hover:text-orange-600 font-black":" text-orange-600 text-4xl font-semibold"} `} >

        {props.item.heading}
      </h1>
      <div className={`flex flex-1 justify-center items-center  ${props.call==="header"?"gap-2":" "}`}>
        <Divider
          style={{ color: "", width: "30px",height:"3px", backgroundColor: "rgb(245,105,65)" }}
        />
        <div className="">{props.item.icon}</div>
        <Divider
          style={{ color: "", width: "30px",height:"3px", backgroundColor: "rgb(245,105,65)" }}
        />
      </div>
      <div className="text-center w-3/4 font-bold text-gray-600">{props.item.info}</div>
    </div>
  );
};

export default Services;
