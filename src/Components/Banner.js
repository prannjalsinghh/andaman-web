import React from 'react';

const Banner = (props) => {

    return(
        <div className=' w-full h-1/6'>
            <img className="w-full" src={props.url}/>
        </div>
    )

}

export default Banner;