'use client';


import {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar=()=>{
  const [show, setShow]=useState(false);
    return(
        <div className="text-black bg-[#04080F] font-serif shadow-2xl shadow-gray-600 w-screen border-b-2-gray-500 lg:p-10 p-5 overflow-y-hidden shadow-2xl shadow-white ">
            <div className="grid grid-cols-3 gap-10 overflow-y-hidden cursor-pointer overflow-x-hidden ">
              <div className="font-bold text-blue-500 text-3xl lg:text-4xl hover:text-yellow-500">Kingo</div>
              <div className="hidden lg:block">
                <ul className="flex text-lg justify-between">
                    <li className="text-green-500 hover:text-orange-400">Home</li>
                    <li className="text-green-500 hover:text-orange-400">About Us</li>
                    <li className="text-green-500 hover:text-orange-400">Service</li>
                    <li className="text-green-500 hover:text-orange-400">Contact</li>
                </ul>
              </div>    
              {show ? (
              <div className="block h-screen overflow-y-hidden lg:hidden cursor-pointer">
                <ul className="flex flex-col text-lg justify-between items-center">
                    <li className="text-green-500 py-10 hover:text-orange-400">Home</li>
                    <li className="text-green-500 py-10 hover:text-orange-400">About Us</li>
                    <li className="text-green-500 py-10 hover:text-orange-400">Service</li>
                    <li className="text-green-500 py-10 hover:text-orange-400">Contact</li>
              <div className="lg:ml-20 z-20 py-10  text-center flex items-center ">
                <button className=" bg-green-600 text-white font-light p-2  hover:bg-white hover:text-green-500 hover:border-gray-400 hover:border-2 rounded-lg ">Let Start</button>
              </div>
                </ul>
              </div>  
              ):null}
              <div className="flex justify-end pt-2 lg:hidden text-black" onClick={()=>setShow(!show)}>
                {show ? (<FaTimes />):(<FaBars />)}
              </div>
              {show ? null:(
                <div className="lg:ml-20 z-20 flex  text-center items-center ">
                <button className= " bg-green-600 text-white font-light p-2 hover:bg-white hover:text-green-500 hover:border-gray-400 hover:border-2 rounded-lg">Let Start</button>
              </div>
              )}
            </div>
        </div>
    );
}

export default Navbar;


