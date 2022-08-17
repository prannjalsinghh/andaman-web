import React from "react";
import { Divider } from "@mui/material";
const Services = (props) => {
  return (
    <div className={`flex flex-col items-center text-center  m-auto mt-10 gap-2 mb-5`}>
      <h1 className={`${props.call==="header"?"text-3xl sm:text-4xl text-white hover:text-orange-600 font-extrabold":" text-orange-600 text-4xl font-semibold"} `}>
        {props.item.heading}
      </h1>
      <div className="flex flex-1 justify-center items-center">
        <Divider
          style={{ color: "orange", width: "50px", backgroundColor: "orange" }}
        />
        <div className="">{props.item.icon}</div>
        <Divider
          style={{ color: "orange", width: "50px", backgroundColor: "orange" }}
        />
      </div>
      <div className="text-center font-bold text-gray-600">{props.item.info}</div>
    </div>
  );
};

export default Services;
