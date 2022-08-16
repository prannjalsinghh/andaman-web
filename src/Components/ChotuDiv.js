import React from "react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const ChotuDiv = (props) => {
  return (
    <div className="w-64 m-auto  flex flex-col items-center gap-3">
      <div>{props.item.icon}</div>
      <div className="font-bold text-red-700">{props.item.heading}</div>
      <Divider
        style={{ color: "orange", width: "50px", backgroundColor: "orange" }}
      />
      <div>{props.item.info}</div>
      {props.item.isButton && (
        <Link to="/contactUs"><button className="p-1.5 rounded-md">Book Now</button></Link>
      )}
    </div>
  );
};

export default ChotuDiv;
