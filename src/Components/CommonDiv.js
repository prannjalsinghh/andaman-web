import { Container } from '@mui/system';
import React from 'react';

const CommonDiv = (props) => {

    return(
        <Container >
        <div>
            <h1 className='text-2xl font-semibold text-orange-700'> {props.title}</h1>
            <ul>
                {props.arr.map((item) => <li>{item}</li>)}
            </ul>
        </div>
        </Container>
    )

};

export default CommonDiv;