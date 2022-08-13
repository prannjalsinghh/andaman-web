import React from 'react';

const Services = (props) => {
    return(
        <div>
            <h1>{props.heading}</h1>
            <div>
                <hr/>
                <div>{props.icon}</div>
                <hr/>
            </div>
            <div>{props.info}</div>
        </div>
    )
}

export default Services;