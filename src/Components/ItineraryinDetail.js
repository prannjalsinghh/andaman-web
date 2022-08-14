import React from 'react';

const Itinerary = (props) => {

    return(
        <>
            <div>
                <h2>{props.itinerary.day}</h2>
                <h2>{props.itinerary.heading}</h2>
            </div>
            <div>
                <p>{props.itinerary.info}</p>
            </div>
        </>
    )

};

export default Itinerary;