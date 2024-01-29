import React from 'react';
import CustomSlider from './Carousel';

function Genres() {
    const images = [
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5288/1535288-a-690bac400aa1",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5281/1535281-a-b56dc39e5bb7",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5302/1535302-a-e90748391e0d",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5250/1535250-a-b320bf06458d",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5295/1535295-a-6a74b60243b1",
        "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8791/1568791-a-e50a43088a1a",

    ];



    return (
        <div className='pt-10 pb-10 px-1'>
            <h3 className='px-2'>Populer Genres</h3>
            <CustomSlider images={images} />
        </div>
    );
}

export default Genres;
