import React from 'react';
import img_curious from "../images/curious.png";

export const DefaultContent = () => {
    return (
        <div className='grid place-content-center text-center h-[60vh]'>
            <img src={img_curious} alt="SEEKiT" width={500} />
            <h2 className='text-2xl dark:text-sky-400 text-sky-500 pt-4 pb-4'>Curious? Just SEEKiT!</h2>
        </div>        
    )
}
