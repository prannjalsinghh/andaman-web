import React from 'react';

const CommonDiv = (props) => {

    return(
        <div>
            <h1>{props.title}</h1>
            {props.arr.map((item) => <li>{item}</li>)}
        </div>
    )

};

export default CommonDiv;