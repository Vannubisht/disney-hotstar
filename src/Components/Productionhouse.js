import React from 'react'
import disney from '../assets/Images/disney.webp'
import marvel from '../assets/Images/marvel.webp'
import nationalG from '../assets/Images/nationalG.webp'
import pixar from '../assets/Images/pixar.webp'
import starwar from '../assets/Images/starwar.webp'
import hotstarimg from '../assets/Images/hotstarimg.webp'

import starwarV from '../assets/Videos/starwarV.mp4'
import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGeographicV from '../assets/Videos/national-geographic.mp4'
import pixarV from '../assets/Videos/pixar.mp4'



function ProductionHouse() {
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: pixar,
            video: pixarV
        },
        {
            id: 3,
            image: marvel,
            video: marvelV
        },
        {
            id: 4,
            image: starwar,
            video: starwarV
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGeographicV
        },
        {
            id: 6,
            image: hotstarimg,
            video: pixarV

        },

    ]
    return (
        <div className='flex  gap-2  p-1 px-2 bg-gray '>
            {productionHouseList.map((item) => (
                
                <div
                    key={item.id}
                    className='relative bg-gray  border-gray-400 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden'>
                    <video
                        src={item.video}
                        autoPlay
                        loop
                        playsInline
                        muted
                        className='absolute z-0 top-0 w-48  h-full object-cover opacity-0 hover:opacity-50'
                    />
                    <img src={item.image} alt={`Production House ${item.id}`} className='w-48 h-full z-[1] object-cover  ' />
                </div>
            ))}
        </div>
    );
}

export default ProductionHouse;