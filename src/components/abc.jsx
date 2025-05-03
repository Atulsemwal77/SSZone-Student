import React from 'react'
import img1 from "../assets/img.jpg";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { PiBookOpenText, PiMedalDuotone } from 'react-icons/pi';

const Abc = () => {
  return (
    <>
     <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-14 rounded-xl flex justify-between items-center mb-6">
            <div className="flex items-center gap-5">
              <img
                src={img1}
                alt=""
                className="rounded-full w-20 border-4 border-white"
              />
              <div>
                <h2 className="text-xl pb-3">Michele Obema</h2>
                <div className='flex gap-2 items-center'>
                  <PiBookOpenText />
                  <p>5 Course Enrolled</p>
                  <div className='flex items-center gap-1'>
                    <PiMedalDuotone />
                    <p>4 Certificate</p>
                  </div>
                </div>
              </div>
            </div>
    
            <button className=" text-white px-4 py-2 rounded-lg shadow flex items-center gap-2 border border-white">
              Enroll a New Course <FaArrowRight />
            </button>
        </div>
    </>
  )
}

export default Abc