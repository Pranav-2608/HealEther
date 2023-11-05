import React from 'react';
import './Hero.css'

// images
import Phone from "../assets/hero-section.png"
import animate from "../assets/hero-section-animate.png";
import '../index.css'

const Hero = () => {
  return (
    // <div>
      <div className='fixed top-16 -z-50'>
        <div className=" flex mx-auto w-[95%] h-full flex-col md:flex-row  md:w-[80%] items-center justify-between">
          <div className=" my-16 mx-2 px-2 md:mx-24 w-[100%] md:w-[60%]">
            <h1 className='text-4xl md:text-6xl mb-10'>Digitize, Preserve & Empower <span className=' text-[#670FF7]'>Healthcare</span></h1>
            <p className=' text-2xl md:text-3xl leading-relaxed'>Your comprehensive online healthcare solution, we provide 24x7 access to personalized healthcare services, seamless integration of health devices, and daily health updates, all within a unified and empowering ecosystem.</p>
          </div>
          <div className="img my-20 relative w-[30%]">
            <img src={Phone} alt="Phone" className=' h-[35rem]' />
            <img src={animate} alt="animate" className='animate w-[16rem] absolute top-36 left-[-5rem] ' />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Hero;