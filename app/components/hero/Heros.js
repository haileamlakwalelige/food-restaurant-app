import React from 'react';
import Image from 'next/image';
import image3 from '../../images/23.jpg';

const Heros=()=>{
    return(
        <div className=" font-serif bg-gradient-to-r from-[#080622] to-[#080622] h-screen w-full grid grid-cos-1 lg:grid-cols-2 gap-10 justify-between items-center overflow-x-hidden">
            <div className=''>
                <h1 className="font-bold text-7xl text-center py-6">Kingo Restaurant</h1>
                <p className="text-center pb-4 text-xl font-bold">Our Food is Special, not because  its our food,<br/> because it is our hard word and passion</p>
                <p className="text-center text-xl font-bold">Test The Hard work and passion</p>
            </div>
            <div className='overflow-hidden'>
                <Image src={image3} alt="image"   height={400} className='w-[98vw] h-[99vh] overflow-y-hidden px-2 pr-4 rounded-3xl brightness-75'/>
            </div>
        </div>
    )
}

export default Heros;