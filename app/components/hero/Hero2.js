import image1 from '../../images/20.jpg';
import image2 from '../../images/25.jpg';
import image3 from '../../images/22.jpg';
import Image from 'next/image';
import './hero.css';

const Hero2=()=>{
    return(
        <div className="hero2 bg-[#080622] shadow-2xl shadow-white">
        <h1 className="font-bold text-3xl text-center flex justify-center items-center py-5">Lets Test</h1>
            <div className="flex flex-col lg:flex-row justify-between items-center px-20 py-12">
                <Image className="hover:brightness-50 hover:rounded-3xl  rounded-large py-4" data-aos='flip-up'
                 src={image1} alt="cover image of food"
                width={300} height={300} />
                <Image className="hover:brightness-50 hover:rounded-3xl  rounded-large py-4"
                 src={image2} alt="cover image of food"
                width={300} height={300} />
                <Image className="hover:brightness-50 hover:rounded-3xl  rounded-large py-4" data-aos="flip-down"
                 src={image3} alt="cover image of food"
                width={300} height={300} />
            </div>

        </div>
    )
}

export default Hero2;