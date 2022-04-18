import {React, useState} from 'react'
import MusicControl from './MusicControl'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-48rem",
    },
    false: {
      left: "-55rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (

    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[2] flex items-center justify-between rounded-b-[5rem]">
        {/* LEFT */}
        <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/backgraphics.png")} alt=""
          className="absolute top-[22rem] left-[-48rem] z-[0]"
          />

          <motion.img
          src={require("../img/d1.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute" />

          <motion.img
          src={require("../img/d2.png")}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]" />

          <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute" />

          <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"/>
        </div>

        {/* RIGHT */}
        <div className="right flex flex-col flex-1 h-[100%] pt-[9rem]">
            <div className="searchbar flex justify-start w-[100%]">
              <input type="text" 
              placeholder="Enter the text..."
              className="flex-[19] bg-[#020917] rounded-xl outline-none p-3 h-[3rem]"
              />

              <div className="search-icon flex flex-1 items-center ml-5 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 rounded-xl h-[3rem]">
                <img
                src={require("../img/search.png")}
                alt=""
                className="w-[1.5rem]"
                />
              </div>
            </div>

            <div className="icon_wavy my-7">
              <img src={require("../img/Path 318.png")}
              className="w-[5rem]" alt="" />
            </div>

            <div className="search_text flex flex-col text-4xl">
              <span>Search Music by</span>
              <span><b>Name or Direct URL</b></span>

              <span className="text-base mt-3 text-[#4D586A]">
                Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
                eget. Vestibulum ullamcorper <br /> volutpat varius.
              </span>
            </div>
        <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
          <MusicControl />
        </VisibilitySensor>
        </div>
    </div>
  )
}

export default Search
