'use client'


import Navbar from './components/navbar/Navbar';
import Heros from './components/hero/Heros';
import Hero2 from './components/hero/Hero2';
import About from './components/abouts/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import Mails from './components/mail/Mails';
import Service from './components/service/Service';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';



const Home=()=>{
  useEffect(()=>{
    AOS.init({duration:500});
  },[]);
  return(
    <div className="bg-white flex flex-col overflow-x-hidden">
     <div className='shadow-2xl shadow-white'>
     <Navbar />
     </div>
     <Heros />
     <Hero2 />
     <About />
     <Mails />
     <Service />
     <Contact />
     <Footer />
    </div>
  );
}

export default Home;
