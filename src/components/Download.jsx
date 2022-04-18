import React from 'react'
import DownloadAds from './DownloadAds'

function Download() {
  return (
    <div className="download flex flex-col items-center justify-start relative h-[50rem] px-[5rem] bg-[#020917] pt-[18rem] pb-[16rem] mt-[-10rem] z-[1] rounded-b-[5rem] ">
        <img src={require("../img/Path 318.png")} alt="" className="w-[5rem] pb-[3rem]" />

        <div className="heading  mt-7 flex flex-col items-center justify-start text-[2rem]">
            <h2>Download The Best Music</h2>
            <span className="text-[2.5rem]"> <b>App Now !</b> </span>

            <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus architecto reiciendis suscipit a nihil veritatis quidem nam excepturi! Reiciendis ea aspernatur tempore ab aut vitae autem voluptate consequatur rem.
        </span>
        </div>
        <div className="mt-14">
            <DownloadAds/>
        </div>
    </div>
  )
}

export default Download
