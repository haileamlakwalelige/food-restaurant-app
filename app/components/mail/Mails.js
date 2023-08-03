import image from '../../images/3.jpg';
import image1 from '../../images/4.jpg';
import image3 from '../../images/6.jpg';
// import image4 from '../.../images/15.jpg';
import image6 from '../../images/9.jpg';
import image7 from '../../images/10.jpg';
import image8 from '../../images/11.jpg';
 import image5 from '../../images/12.jpg';
import image2 from '../../images/13.jpg';

import Image from 'next/image';



const Mails=()=>{
    return(
        <div className="bg-[#080622] font-serif">
            <div className="mt-32 overflow-x-hidden sm:overflow-x-visible">
            <h1 className="font-bold text-3xl py-10 flex justify-center items-center text-center underline">Our Foods</h1>
                <div className='overflow-x-hidden placeholder:flex flex-col lg:flex-row justify-evenly pb-10 items-center'>
                <di data-aos="fade-down"v className="border-gray-300 border-4 p-4 rounded-3xl my-5 h-[400px] flex flex-col justify-center items-center sm:w-72">
                    <Image src={image1} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Delicious Food</p>
                </di>
                <div data-aos="zoom-out" className="overflow-x-hidden border-gray-300 border-4 p-4 rounded-3xl my-5 h-[400px] flex flex-col justify-center items-center sm:w-72">
                    <Image src={image} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Fantastic Food</p>
                </div>
                <div data-aos="zoom-in" className="border-gray-300 border-4 p-4 rounded-3xl my-5 h-[400px] flex flex-col justify-center items-center sm:w-72">
                    <Image src={image2} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Amazing Food</p>
                </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-evenly pb-10 items-center'>
                <div data-aos="fade-up" className="border-gray-300 border-4 p-4 rounded-3xl my-5 h-[400px] flex flex-col justify-center items-center sm:w-72">
                    <Image src={image3} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Special Coffee</p>
                </div>
                <div data-aos="flip-up" className="border-gray-300 border-4 p-4 rounded-3xl my-5 h-[400px] flex flex-col justify-center items-center sm:w-72">
                    <Image src={image7} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Super Food</p>
                </div>
                <div data-aos="flip-down" className="border-gray-300 border-4 p-4 rounded-3xl my-5 h-[400px] flex flex-col justify-center items-center sm:w-72">
                    <Image src={image5} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Special Food</p>
                </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-evenly pb-10 items-center'>
                <div data-aos="slide-right" className="border-gray-300 border-4 p-4 rounded-3xl my-5 h-[400px] flex flex-col justify-center items-center sm:w-72">
                    <Image src={image6} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Unbelievable Food</p>
                </div>
                <div c data-aos="slide-up" className="border-gray-300 border-4 p-4 rounded-3xl  my-5 h-[400px] flex flex-col justify-center items-center w-72 ">
                    <Image src={image7} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Delicious Food</p>
                </div>
                <div data-aos="slide-left" className="border-gray-300 border-4 p-4 rounded-3xl my-5 h-[400px] flex flex-col justify-center items-center sm:w-72">
                    <Image src={image8} alt="First Images"  className="hover:brightness-50"
                    width={200} height={200} />
                    <p className="text-center py-2">Natural Food</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Mails;

