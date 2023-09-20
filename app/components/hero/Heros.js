import React from 'react';
import Image from 'next/image';
import image1 from '../../images/1.jpg';
import image2 from '../../images/3.jpg';
import image3 from '../../images/6.jpg';

const Heros=()=>{
    return(
        <div className=" font-serif bg-gradient-to-r from-[#080622] to-[#080622] h-[80vh] w-full py-10 px-20 grid grid-cos-1 lg:grid-cols-2 gap-10 justify-between items-center overflow-x-hidden">
            <div>
                <h1 className="font-bold text-5xl py-6">Kingo Restaurant</h1>
                <p className="px-4 pb-4">Our Food is Special, not because  its our food,<br/> because it is our hard word and passion</p>
                <p className="px-5">Test The Hard work and passion</p>
            </div>
            {/* <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-center"> */}
            <div className="flex justify-between items-center mr-10">
                <Image src={image1} alt="first Image" width={200} height={200} data-aos="slide-up"  className="mx-2 rounded-2xl"/>
                <Image src={image3} alt="first Image" width={200} height={200} data-aos="zoom-out"  className="mx-2 rounded-2xl"/>
                <Image src={image2} alt="first Image" width={200} height={200} data-aos="slide-down"  className="mx-2 rounded-2xl"/>
            </div>
        </div>
    )
}

export default Heros;