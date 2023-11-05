import React, { useState } from "react";
import HeroImage from "../assets/hero-section.png";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import HeroAnimate from "../assets/hero-section-animate.png";
import Delivery from "../assets/delivery.png";
import Lab from "../assets/lab.png";
import HorizontalScroll from "../components/HorizontalScroll";
import { Data1,Data2,Data3,Abha,LinkAbha,HealthRecord } from '../data'
import Button from "../components/Button";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

// Add required Swiper modules


// Import Swiper styles


import Repeat from "../components/Repeat";
import RepeatContent1 from "../components/RepeatContent1";
import YoreCare from "../components/YoreCare";
import Button2 from "../components/Button2";
import Testimonial from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";

const Home = () => {


  return (
    <div className=" z-10">
    {/* This section contains the heading and the image with phone and animation */}
    <Hero/>

    {/* New Section Starts from here */}
    <div className="bg-white border translate-y-[15%] w-full ">
      <div className="max-w-[1160px] mx-auto flex flex-col gap-10">
        <div className=" mt-10 ">
          <div className="flex flex-col md:flex-row gap-4 justify-evenly items-center ">
            <div>
              <img src={Delivery} alt="delivery" className="w-[500px]" />
            </div>
            <div>
              <img src={Lab} alt="lab" className="w-[500px]" />
            </div>
          </div>
        </div>
      
               
               <RepeatContent1 data={Abha}/>
               <Repeat data={Data1}/>
               <HorizontalScroll/>  
               <RepeatContent1 data={HealthRecord}/>
               <Repeat data={Data2}/>
               <Button/>
               <RepeatContent1 data={LinkAbha}/>
               <Repeat data={Data3}/>
               <YoreCare/>
               <Button2/>
               <Companies/>
               <Testimonial/>
               <FAQ/>
               <Footer/>
               
        </div>
        </div>
        </div>
     
  );
};

export default Home;
