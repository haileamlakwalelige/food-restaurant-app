import Image from 'next/image';
import image1 from '../../images/1.jpg';
import image2 from '../../images/3.jpg';
import image3 from '../../images/6.jpg';


const Hero=()=>{
    return(
        <div className="py-10 pt-72 lg:pt-0 bg-[#080622] h-screen flex item-center justify-center shadow-2xl shadow-white overflow-x-hidden "> 
         <div className='text-white flex items-center flex-col lg:flex-row justify-around w-full'>
         <div className='bg-[#080622] cursor-pointer mt-26 lg:mt-auto text-center'>
                <h1 className='font-bold text-3xl lg:text-5xl font-serif py-5 mt-2 lg:mt-auto  text-white cursor-pointer'>Kingo Restaurant</h1>
                <p className="font-semibold text-white hover:text-yellow-500 py-5 cursor-pointer">Our Food is Special, not because  its our food,<br/> because it is our hard word and passion</p>
                <p className="font-semibold font-serif text-green-500 hover:text-yellow-500 py-5 cursor-pointer">Test The Hard work and passion</p>
            </div>
            <div className='flex justify-between lg:flex-row flex-col bg-[#080622] lg:w-auto w-full text-center items-center'>
                <Image className='rounded-xl px-2 py-5 lg:py-2 hover:brightness-50 hover:rounded-3xl'
                src={image1} alt="Image from The Winners"
                width={200} height={200} />
                <Image className='rounded-xl px-2 py-5 lg:py-2 hover:brightness-50  hover:rounded-3xl'
                src={image2} alt="Image from The Winners"
                width={200} height={200} />
                <Image className='rounded-xl px-2 py-5 lg:py-2 hover:brightness-50 hover:rounded-3xl'
                src={image3} alt="Image from The Winners"
                width={200} height={200} />
            </div> 
         </div>
        </div>
    )
}

export default Hero;

