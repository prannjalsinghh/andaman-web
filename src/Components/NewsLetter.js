import React from 'react';

const NewsLetter = () => {

    return(
        <div className='flex flex-col items-center mt-10'>
            <div>
                <h2>Subscribe to our NewsLetter</h2>
            </div>
            <div className='flex gap-x-1 mt-4'>
                <input placeholder='Your E-mail'/>
                <button className='p-1 rounded-md'>Subscribe</button>
            </div>

        </div>

    )

};

export default NewsLetter;