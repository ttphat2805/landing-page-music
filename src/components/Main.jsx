import {React, useState} from 'react'
import DownloadAds from './DownloadAds'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'
function Main() {

    const [elementIsVisible, setElementIsVisible] = useState(false)


    const bg = {
        true : {
            left : '5rem',
        },
        false : {
            left : '20rem',
        }
    }

    const musicPlayer = {
        true : {
            left : '10rem',
        },
        false : {
            left : '15rem',
        }
    }
    const controls = {
        true : {
            left : '11.6rem',
        },
        false : {
            left : '14rem',
        }
    }
    const rect = {
        true : {
            left : '10rem',
        },
        false : {
            left : '13rem',
        }
    }
    const heart = {
        true : {
            left : '9rem',
        },
        false : {
            left : '12.5rem',
        }
    }
  return (
      <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
      >
        <div className="main bg-[#081730] flex items-center
        justify-between px-[5rem] 
        rounded-b-[5rem] w-[100%] h-[35rem] z-[4] relative
        ">
            {/* LEFT */}
            <div className="headings flex flex-col items-start justify-content h-[100%] text-[3rem]">
                    <span>Experience The</span>
                    <span><b>Best Quality Music</b></span>

                    <span className="text-[15px] text-[#525D6E]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <br/>
                        Ipsa ut mollitia fuga voluptatem ipsam nam earum impedit tempora officiis amet
                    </span>

                    <div >
                        <span className="text-[13px]">Download now</span>

                        <DownloadAds />
                    </div>
            </div>
            {/* RIGHT */}
            <div className="images relative w-[50%]">
                    <motion.img 
                    variants={bg}
                    animate={`${elementIsVisible}`}
                    transition={{duration:1, type:"ease-out"}}
                    src={require("../img/backgraphics.png")} alt=""
                    className="mockup absolute top-[-8rem] left-[19rem]"
                    />

                    <motion.img 
                    variants={musicPlayer}
                    animate={`${elementIsVisible}`}
                    transition={{duration:1, type:"ease-out"}}
                    src={require("../img/p 1.png")} alt=""
                    className="absolute top-[-15rem] h-[34rem] left-[13rem]"
                    />
                    <motion.img 
                    variants={controls}
                    animate={`${elementIsVisible}`}
                    transition={{duration:1, type:"ease-out"}}
                    src={require("../img/p 2.png")} alt=""
                    className="absolute top-[94px] w-[175px] left-[235px]"

                    />
                    <motion.img 
                    variants={rect}
                    animate={`${elementIsVisible}`}
                    transition={{duration:1, type:"ease-out"}}
                    src={require("../img/p 3.png")} alt="" 
                    className="absolute top-[12rem] w-[5rem] left-[13rem]"

                    />
                    <motion.img 
                    variants={heart}
                    animate={`${elementIsVisible}`}
                    transition={{duration:1, type:"ease-out"}}
                    src={require("../img/p 4.png")} alt="" 
                    className="absolute top-[12rem] w-[5rem] left-[12.5rem]"

                    />


            </div>

        </div>
      </VisibilitySensor>

  )
}

export default Main