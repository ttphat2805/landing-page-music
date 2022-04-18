import React from 'react'
function CenterMenu() {
    const liStyle = "mr-[3rem] text-[1rem] hover:cursor-pointer hover:text-[#E600FF] hover:ease-in duration-300"

  return (
    <div>
        <div className="menu flex">
                <ul className="flex w-[100%] justify-between">
                    <li className={liStyle}>Home</li>
                    <li className={liStyle}>About</li>
                    <li className={liStyle}>Contact</li>
                    <li className={liStyle}>Blog</li>
                </ul>
        </div>
    </div>
  )
}

export default CenterMenu