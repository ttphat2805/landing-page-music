import React from 'react';
import CenterMenu from './CenterMenu';
const Header = () => {

    const btnStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px] hover:bg-[#232A4E]"

    return (
        <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
            <img src={require("../img/MuzicLogo.png")} alt=""
            className="logo w-[42px] h-[42px]"
            />
            <CenterMenu />
            <div className="buttons flex">
                <button className={`${btnStyle} mr-[35px] `}>Sign up</button>
                <button className={btnStyle}>Log in</button>
            </div>
        </div>

    );
};

export default Header;