import { useSlotProps } from '@mui/base';
import React from 'react';

const ChotuDiv = (props) => {

    return(
        <div className='w-64 m-auto  flex flex-col items-center gap-3' >
            <div>{props.item.icon}</div>
            <div>{props.item.heading}</div>
            <hr className='w-1/4 bg-orange-500'></hr>
            <div>{props.item.info}</div>
            {props.item.isButton &&<button className='p-1.5 rounded-md'>Book Now</button>}

        </div>
    )

};

export default ChotuDiv;