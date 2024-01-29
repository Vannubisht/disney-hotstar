import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CustomSlider = ({ images }) => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className='px-1 transition-transform duration-300 transform hover:scale-110' key={index}>
                        <img  src={image} alt={`Carousel Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;
