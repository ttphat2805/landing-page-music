import React from 'react';
import CenterMenu from './CenterMenu';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin  } from "react-icons/fa";
const Footer = () => {
    const styleIcon = "rounded-full border-2 border-[#fff] p-3 text-[1.2rem] mr-[5.5rem] hover:bg-[#fff] hover:text-[#081730] cursor-pointer hover:ease-in hover:duration-300";
    return (
        
        <div className="footer flex flex-col items-center justify-start relative h-[38rem] px-[5rem] bg-[#081730] pt-[13rem] pb-[5rem] mt-[-5rem] z-[0]">
            <CenterMenu />

            {/* icon */}
            <div className="icon ml-[4rem] flex items-center justify-center w-[100%] mt-14">
                <div className={styleIcon}>
                    <FaFacebook />
                </div>
                <div className={styleIcon}>
                    <FaTwitter />
                </div>
                <div className={styleIcon}>
                    <FaYoutube />
                </div>
                <div className={styleIcon}>
                    <FaLinkedin />
                </div>
            </div>

            <span className="mt-[4rem] text-center px-[15rem] text-[1rem] text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto officiis hic! Aliquid, id odit mollitia quas praesentium quos at animi commodi quaerat temporibus iure cupiditate explicabo magnam nesciunt ut.
            </span>
        </div>
    );
}

export default Footer;
