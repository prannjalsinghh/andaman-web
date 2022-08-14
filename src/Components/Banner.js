import React from 'react';

const Banner = (props) => {

    return(
        <div className=' w-full'>
            <img className="w-full" style={{height:"50vh"}} src={props.url}/>
        </div>
    )

}

export default Banner;