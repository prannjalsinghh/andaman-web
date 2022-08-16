import React from 'react';

const NewsLetter = () => {

    return(
        <div className='flex flex-col items-center text-center mt-10 p-5'>
            <div>
                <h2 className='font-semibold text-3xl text-white'>Subscribe <br/> to our NewsLetter</h2>
            </div>
            <div className='flex gap-x-1 mt-4'>
                <input className='w-64' placeholder='Your E-mail'/>
                <button className='p-1 rounded-md'>Subscribe</button>
            </div>

        </div>

    )

};

export default NewsLetter;