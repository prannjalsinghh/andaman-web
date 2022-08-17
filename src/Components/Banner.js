import React from "react";

const Banner = (props) => {
  return (
    <div className="-mt-24 w-full max-w-screen-sm sm:max-w-full" style={{
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
