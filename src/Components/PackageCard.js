import React from "react";

const PackageCard = (props) => {
  return (
    <div className=" flex flex-col mt-10 max-w-50 ">
        <div>
          <img className="h-60 rounded-md" src={props.item.url} />
        </div>
      <h2 className="text-2xl font-semibold mt-3">{props.item.heading}</h2>
      <div className=" flex flex-row  justify-between mt-1">
        
       
          <button className="rounded-md p-2">More Details</button>
          <p>38 Tours</p>
       
      </div>
    </div>
  );
};

export default PackageCard;
