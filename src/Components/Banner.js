import React from "react";

const Banner = (props) => {
  return (
    <div className=" w-full" style={{
        backgroundImage:`url('${props.url}')`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"50vh"
    }}>
      
    </div>
  );
};

export default Banner;
