import React from 'react'

function DownloadAds() {
    const downloadImages_Style = "border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"
  return (
    <div className="download">
      <div className="download_images flex">
           <img src={require("../img/App_Store.png")} 
           alt=""
            className={`${downloadImages_Style} mr-[2rem]`}
            />
           <img src={require("../img/Google_Play.png")}
            alt=""
            className={downloadImages_Style}
            />
      </div>
    </div>
  )
}

export default DownloadAds
