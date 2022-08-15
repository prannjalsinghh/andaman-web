import React from "react";
import { Divider } from "@mui/material";
const Services = (props) => {
  return (
    <div className="flex flex-col items-center w-3/4 m-auto mt-10 gap-2">
      <h1 className="text-5xl font-semibold text-orange-600">
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
      <div className="text-center">{props.item.info}</div>
    </div>
  );
};

export default Services;
