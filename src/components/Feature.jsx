import {React, useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

function Feature({icon, title}) {

  const [elementIsVisible, setElementIsVisible] = useState(false)


  const variants = {
    true : {
      transform: "scale(1)",
    },
    false : {
      transform: "scale(0.5)",
    }
  }

  return (
    <VisibilitySensor
    onChange={(isVisible) => setElementIsVisible(isVisible)}
    minTopValue={300}
    >
      <div className="feature flex items-center justify-center flex-col text-center mx-12">
          <motion.div 
            variants={variants}
            animate={`${elementIsVisible}`}
            transition={{duration:1, type:"ease-out"}}
            className="icon bg-[#081730] p-4 rounded-2xl">
            <img src={require(`../img/${icon}.png`)} alt="" className="w-[3rem] "/>
          </motion.div>

          <span className="mt-5">{title}</span>

          <span className="text-[#707070] mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odio, ad tenetur animi repudiandae dolor eius ab aliquid error deserunt omnis
          </span>
          <span className="btn px-[20px] py-[10px] mt-[3rem] bg-[#081730] cursor-pointer rounded-full hover:opacity-80 hover:text-[#E600FF] hover:ease-in duration-300">
              Learn more
          </span>
      </div>
    </VisibilitySensor>
  )
}

export default Feature
