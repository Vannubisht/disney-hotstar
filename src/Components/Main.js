import React from "react";
import Navbar from './Navbar'
import Top from './Top'
import Slider from './Slider';
import requests from './request';
import Footer from './Footer';
import Language from "./Language";
import Genres from "./Genres";
import Productionhouse from "./Productionhouse";
import Channel from "./Channel";


const Main = () => {

    return (
        <div>
            <div className='flex  h-full w-full '>
                <div className='w-1/12 h-full '>
                    <Navbar />
                </div>
                <div className='w-11/12'>
                    <Top />
                    <div className='z'>

                        <Slider title="Latest releases" fetchUrl={requests.fetchActionMovies} />
                        <Slider title="Free-Newly Added" fetchUrl={requests.fetchComedyMovies} />
                        <Slider title="Disney Movies" fetchUrl={requests.fetchDocumentaries} />
                        <Productionhouse />
                        <Language />
                        <Genres />
                        <Slider title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                        <Slider title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
                        <Channel />
                        <Slider title="Populer Movies" fetchUrl={requests.fetchDoc} />
                        <Footer />
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Main;