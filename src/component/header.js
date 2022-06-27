import React from "react";

const Header = () => {
    return(
        <div className="relative flex flex-row w-full h-[480px]">
            <div className="absolute lg:relative z-20 w-full h-full lg:w-1/2 flex items-center justify-center px-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl font-bold">Friday Pizza!</h1>
                    <p className="text-3xl font-medium">Time to enjoy our delicious pizza.</p>
                    <div className="flex">
                        <button className="px-5 py-2 rounded-3xl bg-[#EC0000] text-white font-semibold text-xl shadow-lg shadow-red-600">ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div className="relative w-full lg:w-1/2 h-full flex">
                <img src={process.env.PUBLIC_URL + '/images/pizza/header.png'} className="w-full h-full object-cover" alt="header_image" />
                <div className="absolute w-full h-full bg-gradient-to-r from-white lg:via-transparent"></div>
            </div>
        </div>
    )
};

export default Header;