import {React, useState, useEffect} from 'react'
import {FaArrowUp} from 'react-icons/fa';
function ScrollTop() {

    const [isButton, setButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY > 100){
                setButton(true);
            }else{
                setButton(false);
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
  return (
    <div>
      {isButton && (
          <button type="button" onClick={scrollToTop} className="fixed flex items-center text-center z-[5] bottom-[3rem] right-[2rem] p-3 rounded-full bg-[#ffffffcc] text-[#081370] text-[1.2rem] hover:bg-[#020917] hover:text-[#fff] hover:border hover:border-[#fff] ease-in duration-300">
            <FaArrowUp/>
          </button>
      )}
    </div>
  )
}

export default ScrollTop
