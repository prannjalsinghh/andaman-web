import React from 'react';

const Banner = (props) => {

    return(
        <div className=' w-full h-1/4'>
            <img src={props.url}/>
        </div>
    )

}

export default Banner;