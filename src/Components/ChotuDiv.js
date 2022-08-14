import React from "react";
import { Divider } from "@mui/material";
const ChotuDiv = (props) => {
  return (
    <div className="w-64 m-auto  flex flex-col items-center gap-3">
      <div>{props.item.icon}</div>
      <div>{props.item.heading}</div>
      <Divider
        style={{ color: "orange", width: "50px", backgroundColor: "orange" }}
      />
      <div>{props.item.info}</div>
      {props.item.isButton && (
        <button className="p-1.5 rounded-md">Book Now</button>
      )}
    </div>
  );
};

export default ChotuDiv;
