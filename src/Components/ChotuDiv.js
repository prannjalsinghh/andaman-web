import { useSlotProps } from '@mui/base';
import React from 'react';

const ChotuDiv = (props) => {

    return(
        <div>
            <div>{props.icon}</div>
            <div>{props.heading}</div>
            <hr></hr>
            <div>{props.info}</div>
            {isButton&&<button>Book Now</button>}

        </div>
    )

};

export default ChotuDiv;