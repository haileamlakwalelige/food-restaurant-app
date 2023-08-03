import Image from "next/image";
import image from '../../images/2.jpg';
import image2 from '../../images/chiefs.jpg';
import image3 from '../../images/how.jpg';




const Service=()=>{
    return(
        <div className="text-white bg-[#080622] flex justify-center items-center py-20 shadow-2xl shadow-white">
            <div className="flex flex-col lg:flex-row justify-between items-stretch">
                <div className="py-12 flex-col items-center justify-center border-2 border-gray-400 mt-5 rounded-2xl mx-5 text-orange-400">
                    <p className="flex items-center justify-center font-serif">We offer fresh products <br/>
                    to make sure you stay as <br/>
                    fresh as you are <br/>
                    </p>
                    <Image src={image} alt="Fresh Foods"
                    width={300} height={100}  className="my-4 hover:brightness-150"/>
                </div>
                <div className="py-12 flex flex-col items-center justify-center border-2 border-gray-400 mt-5 rounded-2xl mx-5 text-green-400">
                    <Image src={image2} alt="How our chiefs Works" 
                    width={300} height={100}  className="my-4 hover:brightness-150"/>
                    <p className="flex items-center justify-center font-serif">This is How our chiefs work to<br/>
                    to satisfy you as you are our family.</p>
                </div>
                <div className="py-12 flex flex-col items-center justify-center border-2 border-gray-400 mt-5 rounded-2xl mx-5 text-pink-400">
                    <p className="flex items-center justify-center font-serif">This is How we cook by making <br/>
                    perfection in our Foods and drinks!!!</p>
                    <Image src={image3} alt="How we cook"
                    width={300} height={100}  className="my-4 hover:brightness-150"/>
                </div>
            </div>
        </div>
    )
}

export default Service;