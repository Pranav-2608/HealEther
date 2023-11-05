

import React ,{useState,useEffect} from 'react'
import Phone from "../assets/phone.png";
import Qr from "../assets/QRCode.png";
import aadhar from "../assets/aadhar.png";
import image1 from "../assets/phoneimg1.png";
import image2 from "../assets/phoneimg2.png";
import image3 from "../assets/phoneimg3.png";
import { motion } from 'framer-motion';

const Accordian = (props) => {
    // console.log(props.data);
    const [open, setOpen] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setOpen((count) =>count==3?1:count + 1);
        },4000);
      },[open]);

    return (
        <div className=' my-[15rem] md:my-0'>
            
            <div className='flex gap-8 flex-col md:flex-row items-center justify-center h-screen  '>
                <div className=' flex-[2] flex flex-col items-center justify-center gap-8 w-[100%]'>
                    <div
                     className={open==1?" border border-black flex gap-4 rounded-lg shadow-xl p-4 w-[90%] md:w-[500px] " : 
                     `flex gap-4 p-4 rounded-lg shadow-xl  w-[90%] md:w-[500px]  max-w-[500px] `} onClick={()=>setOpen(1)}>
                        <div className=' h-[50px] aspect-square w-fit '>
                            <img src={props.data.content1.img} alt="" className=' h-full w-full ' />

                        </div>
                        <div className='flex flex-col gap-4 w-[50vh]'>
                            <h1 className=' text-2xl font-semibold '>{props.data.content1.h1}</h1>
                            <p className={ open==1?"w-[25vh] md:[40vh]": "hidden"}>{props.data.content1.p}</p>

                        </div>
                    </div>
                  
                    <div className={open==2?" border border-black flex gap-4 p-4  w-[90%] md:w-[500px] rounded-md shadow-md": 
                     `flex gap-4 p-4 max-w-[500px] rounded-md shadow-md  w-[90%] md:w-[500px] `} onClick={()=>setOpen(2)}>
                        <div className=' h-[50px] aspect-square w-fit '>
                            <img src={props.data.content2.img} alt="" className=' h-full w-full ' />

                        </div>
                        <div className='flex flex-col gap-4 w-[45ch]'>
                            <h1 className=' text-2xl font-semibold '>{props.data.content2.h1}</h1>
                            <p className={ open==2?"w-[25vh] md:[40vh]": "hidden"}>{props.data.content2.p}</p>

                        </div>
                    </div>
                    
                    <div className={open==3?" border border-black flex gap-4 p-4  w-[90%] md:w-[500px] rounded-md shadow-md": 
                     `flex gap-4 p-4 max-w-[500px] rounded-md shadow-md  w-[90%] md:w-[500px] `} onClick={()=>setOpen(3)}>
                        <div className=' h-[50px] aspect-square w-fit '>
                            <img src={props.data.content3.img} alt="" className=' h-full w-full ' />

                        </div>
                        <div className='flex flex-col gap-4 w-[45ch]'>
                            <h1 className=' text-2xl font-semibold '>{props.data.content3.h1}</h1>
                            <p className={ open==3?"w-[25vh] md:w-[40vh]": "hidden"}>{props.data.content3.p}</p>

                        </div>
                    </div>

                </div>
       
                <div className=' flex flex-[1] items-center justify-center py-8 h-full relative'>
                    <img src={props.data.image.mobile} alt="" className=' h-full w-auto' />
                    {
                        open == 1 ?
                            <div>
                                <img src={props.data.image.img1} alt="" className=' w-[13rem] absolute left-5 top-40' animate={
                                    {
                                        x: "50px"
                                    }
                                }
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />
                            </div> : open == 2 ? <div>
                                <motion.img src={props.data.image.img2} alt="" className=' absolute left-5 top-20' 
                                animate={
                                    {x: "50px"}}
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />
                                <motion.img src={props.data.image.img3} alt="" className=' absolute right-5 bottom-52' 
                                animate={
                                    {x: "50px"}}
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />
                                <motion.img src={props.data.image.img4} alt="" className=' absolute left-5 bottom-20' 
                                animate={
                                    {x: "50px"}}
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />

                            </div> : open == 3 ? <div>
                                <motion.img src={props.data.image.img5} alt="" className='w-[15rem] absolute left-5 bottom-40' animate={
                                    {
                                        x: "50px"
                                    }
                                }
                                    transition={{
                                        duration: 2,
                                        delay:2,
                                        repeatType: "mirror",
                                        repeat: Infinity
                                    }}
                                />
                            </div> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Accordian;