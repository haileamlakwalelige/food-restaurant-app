import {FaInstagramSquare, FaFacebookF, FaTwitterSquare, FaLinkedinIn, FaChessKing} from 'react-icons/fa';

import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#04080F] text-white py-5">
     <div className="flex justify-center items-center">
     <FaChessKing size={50}  className="sm:mx-3 ml-2 mr-1 sm:mr-5 hover:text-blue-600 font-bold text-white"/>
     <h1 className='font-bold font-serif text-xl sm:text-3xl text-center pt-3'>Kingo Restaurant</h1>
     </div>
     <p className="font-bold font-serif text-green-500 ml-16 text-center text-lg mb-2">We Serve Best in Town</p>
        <div className="grid lg:grid-cols-2 items-center gap-5 grid-cols-1 px-10 py-3 font-serif text- justify-center  lg:justify-between">
        <div className=" grid-cols-1 justify-center items-center text-center self-center p-2">
          <h className="font-bold text-2xl text-center">Special occasions</h>
          <div className="text-center list-style-type-none list-none">
            <li className='font-light text-lg hover:underline hover:text-blue-500 cursor-pointer hover:font-bold'>For Birthdays</li>
            <li className='font-light text-lg hover:underline hover:text-blue-500 cursor-pointer hover:font-bold'>For Marriages</li>
            <li className='font-light text-lg hover:underline hover:text-blue-500 cursor-pointer hover:font-bold'>For Meeting</li>
            <li className='font-light text-lg hover:underline hover:text-blue-500 cursor-pointer hover:font-bold'>For Ceremony</li>
          </div>
        </div>
        
        <div>
          <h1 className="font-bold text-xl text-center py-3">Find us </h1>
          <div className='font-bold flex flex-col md:flex-row justify-center items-center'>
            <FaFacebookF size={30} className="mx-4 my-3 lg:my-auto hover:transform cursor-pointer hover:my-3 hover:text-blue-600 hover:-translate-y-5 "/>
            <FaTwitterSquare size={30} className="mx-4 my-3 lg:my-auto hover:transform cursor-pointer hover:my-3 hover:text-blue-600 hover:-translate-y-5 "/>
            <FaInstagramSquare size={30} className="mx-4 my-3 lg:my-auto hover:transform cursor-pointer hover:my-3 hover:text-blue-600 hover:-translate-y-5 "/>
            <FaLinkedinIn size={30} className="mx-4 my-3 lg:my-auto hover:transform cursor-pointer hover:my-3 hover:text-blue-600 hover:-translate-y-5 "/>
          </div>
        </div>
        </div>
        <h1 className="font-serif hover:text-2xl hover:text-blue-700 hover:cursor-pointer text-light text-center">Developed by Haileamlak Waleligne(Haileopia)</h1>
    </div>
  )
}

export default Footer