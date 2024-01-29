import React from 'react';
import CustomSlider from './Carousel';
import channel1 from '../assets/Images/channel1.webp';
import channel2 from '../assets/Images/channel2.webp';
import channel3 from '../assets/Images/channel3.webp';
import channel4 from '../assets/Images/channel4.webp';


function Channel() {
    const images = [
        channel1,
        channel2,
        channel3,
        channel4,
        channel1,
        channel2,
        channel3,
        channel4,


    ];



    return (
        <div className='pt-10 pb-10 px-1 '>
            <h3 className='px-2'>Populer Channel</h3>
            <CustomSlider images={images} />
        </div>
    );
}

export default Channel;