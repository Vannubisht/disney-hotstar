import React, { useEffect, useState } from "react";
import thelegent from '../assets/Images/thelegent.webp';
import legentlogo from '../assets/Images/legentlogo.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


const Top = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
    };
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            }
            else {
                setShow(false)
            }
        })
    })
    return (
        <div style={{ backgroundImage: `linear-gradient(to right,rgb(18,18,21),rgba(0,0,0,0.1)),url(${thelegent})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: "fixed" }}
            className="h-screen grid lg:grid-cols-2 md:grid-cols-2 relative legent-back">

            <div className='lg lg:ml-2 text-slate-300 relative pt-14 z-10 top-0 right-0 bottom-0 left-0 '>
                
                <img src={legentlogo} alt="" className=" legent-img text-slate-300 pt-14 font-bold lg:text-4xl" />
                <h4 className="cursor-pointer pt-1 text-blue-700"> New Season</h4>
                <h4 className="text-slate-300 mt-1 font-bold lg:mt-2 gap-3 lg:gap-5 lg:text-s xl:text-m">2024 . 3 Season . 7 languages . <span className="bg-gray-400 bg-opacity-50 px-3 py-1 rounded-[5px] lg:rounded-[8px] lg:text-base xl:text-lg">U/A 7+</span></h4>
                <p className="text-slate-300 text-base  xl:text-base font-300 mt-3 lg:mt-4">Setting his mighty foot on Lanka, Hanuman unleashes <br />himself against Ravan. Watch the legendary hero and <br />the demon king go head to head in this ultimate war.</p>
                <h3 className="font-bold mt-6 text-slate-300 text-base lg:text-s xl:text-m">Mythology | Animation | Creatures & Monsters </h3>
                <button className='btn text-white font-bold mt-10 bg-gray-400 bg-opacity-50 px-8 rounded-[10px] py-3 text-[16px] lg:text-lg lg:px-10 lg:py-4 xl:text-xl'><span className="p-2"><FontAwesomeIcon icon={faPlay} /></span>Subscribe to watch</button>
                <button className='bb btn text-white ml-5 mt-5 bg-gray-400 bg-opacity-50 px-6 rounded-[10px] py-4 text-[20px] lg:text-lg xl:text-xl'>+</button>
            </div>


            <div className=" top-carousle absolute bottom-10 lg:bottom-16 py-5 right-0 w-full lg:w-1/2 p-5 lg:p-10 z-20 hover-transform">
                <Slider {...settings}>
                    <img className="top-img " src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/2816/1652816-h-228dba42c0b9" alt=" 1" />
                    <img className="top-img " src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/7912/1647912-h-4635b7060678" alt=" 2" />
                    <img className="top-img " src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/9665/1649665-h-6b82515b2626" alt="3" />
                    <img className="top-img " src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3190/1653190-h-f0080151b1f4" alt="3" />
                    <img className="top-img " src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3253/1653253-h-bbd6c01da1f3" alt="3" />
                    <img className="top-img " src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/9665/1649665-h-6b82515b2626" alt="3" />
                    <img className="top-img  " src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3190/1653190-h-f0080151b1f4" alt="3" />
                    <img className="top-img " src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3253/1653253-h-bbd6c01da1f3" alt="3" />
                </Slider>
            </div>
            <div className={`cc ${show && "black"}`}></div>
        </div>
    )
}
export default Top;