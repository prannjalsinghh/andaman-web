import React from 'react';

const PackageCard = (props)=>{

    return(
        <div>
            <h2>{props.heading}</h2>
            <div>
                <img src={props.url}/>
            </div>
            <div>
                <p>{props.info}</p>
                <button>More Details</button>
            </div>


        </div>
    )

}

export default PackageCard;