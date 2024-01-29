import React, { useState } from "react";
import logod from "../assets/Images/logod.webp"
import user from "../assets/Images/user.png"
import search from "../assets/Images/search.png"
import home from "../assets/Images/home.png"
import tv from "../assets/Images/tv.png"
import movie from "../assets/Images/movie.png"
import sport from "../assets/Images/sport.png"
import categories from "../assets/Images/categories.png"






const Navbar = () => {
    const [touch, setTouch] = useState(false);


    return (
        <div
            onMouseEnter={() => setTouch(true)}
            onMouseLeave={() => setTouch(false)}
            className={`fixed top-0 left-0 top-nav z-30 h-screen w-28 bg-transparent ${touch ? 'hovered' : ''}`}
        >

            <div className="grid grid-cols-2" >

                <div className="cursor-pointer nav-top2">
                    <img src={logod} alt="" className="w-14 py-5 mt-5 ml-5 pb-8" />
                    <img src={user} alt="" className="w-5   ml-10 mt-8" />
                    <img src={search} alt="" className="w-5   ml-10 mt-8" />
                    <img src={home} alt="" className="w-5   ml-10 mt-8" />
                    <img src={tv} alt="" className="w-5   ml-10 mt-8" />
                    <img src={movie} alt="" className="w-5   ml-10 mt-8" />
                    <img src={sport} alt="" className="w-5   ml-10 mt-8" />
                    <img src={categories} alt="" className="w-5   ml-10 mt-8" />
                </div>
                {touch && (
                    <div className="hide-nav ml-8 w-24 bg-gradient-to-r pt-9  from-gray-950 to-black-700 h-screen font-bold text-base text-slate-300">
                        <h4 className="pt-28">My space</h4>
                        <h4 className="mt-6">Search</h4>
                        <h4 className="mt-7">Home</h4>
                        <h4 className="mt-7">Tv</h4>
                        <h4 className="mt-7">Movie</h4>
                        <h4 className="mt-7">Sport</h4>
                        <h4 className="mt-7">Categories</h4>
                    </div>
                )}
            </div>
        </div>
    );

};


export default Navbar;
