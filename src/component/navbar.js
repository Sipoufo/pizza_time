import React from "react";
import { faBars, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return(
        <div className="w-full px-14 py-6 flex justify-center">
            <div className="w-full flex flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex flex-row items-center">
                    <img src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt="logo" className="w-[4vw]" />
                    <h1 className="text-2xl font-medium text-[2vw]">Pizza Time</h1>
                </div>
                <ul className="hidden md:flex flex-row gap-10 text-base items-center font-light">
                    <li className="text-[#EC0000] font-medium">Home</li>
                    <li>Menu</li>
                    <li>Promo</li>
                    <li><FontAwesomeIcon icon={faSearch}/></li>
                    <li><FontAwesomeIcon icon={faCartShopping} className='font-light' /></li>
                    <li><button className="px-5 py-2 rounded-3xl bg-[#EC0000] text-white font-normal">SIGN IN</button></li>
                </ul>
                <ul className="flex md:hidden text-base items-center font-light">
                    <li><FontAwesomeIcon icon={faBars} className='font-light' /></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;