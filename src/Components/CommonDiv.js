import { Container } from '@mui/system';
import React from 'react';

const CommonDiv = (props) => {

    return(
        <Container>
          <div  className='mt-10 m-auto sm:ml-0 ml-5'>
            <h1 className='text-2xl font-semibold text-orange-600'> {props.title}</h1>
            <h3 className='font-bold text-red-700'>{props.subtitle}</h3>
            <ul className='mt-5 list-decimal font-bold text-gray-700'>
                {props.arr?.map((item) => <li>{item}</li>)}
            </ul>
           </div>
        </Container>
    )

};

export default CommonDiv;