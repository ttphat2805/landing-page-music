import React from 'react'

function MusicControl() {
  return (
    <div className="musicControl mt-[2rem] flex flex-col border-2 border-[#192a56] py-3 px-5">
        <div className="upperPart flex items-center justify-between">
            <div className="profile flex">
                <img src={require("../img/Mask Group 23.png")} alt=""
                className="w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full"
                />

                <div className="detail flex flex-col ml-5">
                    <span className="title text-[1rem] font-semibold">
                        Cơn Mưa Ngang Qua
                    </span>
                    <span className="artist text-base text-gray-500 ">
                        Tran Tan Phat
                    </span>
                </div>
            </div>
            <div>
                <img src={require("../img/path.png")} alt="" className=" h-[1rem] " />
            </div>
        </div>
        <div className="lowerPart flex items-center justify-between">
            <div className="timer flex items-center justify-between flex-[2] text-base text-gray-500">
                <span>2:30</span>
                <img
                    src={require("../img/Group 9.png")}
                    alt=""
                    className="w-[16rem]"
                />
                <span>4: 30</span>
            </div>
            <div className="controls flex flex-1 items-center justify-around ml-4">
                    <span>Left</span>
                    <span>Play</span>
                    <span>Next</span>

            </div>
        </div>
    </div>
  )
}

export default MusicControl
