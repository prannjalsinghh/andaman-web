import { Container } from '@mui/system';
import React from 'react';
import { Container } from '@mui/material';

const CommonDiv = (props) => {

    return(
        <Container className='mt-10'>
          <div>
            <h1 className='text-2xl font-semibold text-orange-600'> {props.title}</h1>
            <h3>{props.subtitle}</h3>
            <ul className='mt-5 list-decimal font-bold text-gray-700'>
                {props.arr.map((item) => <li>{item}</li>)}
            </ul>
           </div>
        </Container>
    )

};

export default CommonDiv;