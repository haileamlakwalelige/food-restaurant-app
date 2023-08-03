import Image from "next/image";
import image from '../../images/cookers.jpg';


const About=()=>{
    return(
        <div className="bg-[#080622] text-gray-300 font-serif shadow-b-2xl shadow-b-white">
            <div className="flex lg:flex-row flex-col justify-between items-center px-20 pt-20 pb-10">
                <div className="flex ;g:justify-center lg:items-start flex-col py-4 lg:py-0 cursor-pointer">
                    <h1 className="sm:text-5xl text-3xl font-bold pb-4 ">Kingo Restaurant</h1>
                    <p className="flex justify-center items-start">Out mail is not just food and drink,<br/>
                     but also love and miracle, we serve humanity<br/>
                      by making the best out of the town,<br/>
                       and we will make you happy and Special <br/>
                       so be fast to get served! </p>
                </div>
                <div className="flex w-screen sm:w-auto items-center justify-center sm:px-4 my-4 lg:my-0 sm:py-4 lg:py-0 brightness-50 hover:brightness-100">
                    <Image 
                    src={image} alt="center image"
                    width={300} height={400} />
                </div>
                <div className="flex flex-col items-center justify-center py-4 lg:py-0 cursor-pointer">
                    <h1 className="text-2xl flex justify-center items-center lg:pl-12 font-bold">It is our pleasure to serve you</h1><br/>
                    <p className="font-large pt-[-120px] flex items-center justify-center">you are not just customer, <br/>
                     you are a family for us. <br/>
                     so come and join you family!</p>
                </div>
            </div>
        </div>
    )
}

export default About;

