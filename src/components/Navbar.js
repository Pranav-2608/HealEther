// import React, { useState } from 'react'
// import { AiOutlineDown } from 'react-icons/ai';
// import { PiDotOutlineFill } from 'react-icons/pi'
// import  Logo  from '../assets/Logo.png'



// const Navbar = () => {

//     const[header,setHeader]=useState(false);
//     if(window.scrollY>=50){
//         setHeader(true);
//     }

//   return (
//     <div className={` fixed z-50 transition-all duration-500 w-full ${(window.scrollY>50 || header) ? 'bg-[#F4EDFF] ':'bg-white opacity-70 shadow-lg border'}`} >
//       <div className={` container mx-auto flex items-center gap-y-6 md:justify-center lg:flex-row lg:justify-between lg:gap-y-0 max-w-[1160px]`}>
//         {/* Logo */}
//         <a href='/'>
//           <img src={Logo} alt="logo" className='w-[200px] h-[100px]'/>
//         </a>

//         {/* nav  */}
//         <nav className={`  flex gap-x-4 font-bold  text-[15px] items-center lg:gap-x-8`}>
//            <a href='/' className='text-purple-500 hover:opacity-50'><div className='flex items-center'><PiDotOutlineFill size={30}/>Home</div></a>
//            <a href='/features' className=' hover:opacity-50'><div className='flex items-center gap-1'>App Features<AiOutlineDown size={13}/></div></a>
//            <a href='/about' className=' hover:opacity-50'>About Us</a>
//            <a href='/download' className='hover:shadow-2xl shadow-purple-600 '><button className='bg-[#670FF7] p-2 text-white rounded-lg
//            hover:bg-purple-900 
//            '>Download Now</button></a>
//         </nav>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { PiDotOutlineFill } from 'react-icons/pi'
import { FaXmark } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';

// images
import logo from "../assets/Logo.png"

const Navbar = () => {
  const [isSticky, setIssticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function ToggleMenu() {
    setMenuOpen(!menuOpen);
    console.log("callesd")

  }
  console.log(menuOpen)
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY >= 1) {
        setIssticky(true);
        // console.log("activated");
      } else {
        setIssticky(false)
      }
    }

    window.addEventListener("scroll", handelScroll)
  }, [])
  return (
    <div className='relative ' >
      <nav className={`${isSticky == true ? ` fixed top-0 h-22  z-20 shadow-sm shadow-black bg-white` : `bg-[#F4EDFF]`}
      
        w-full h-20 flex justify-between font-sans font-semibold text-base p-8 opacity-70`}>
        <img src={logo} alt="logo" className=' ml-2 md:ml-24' />

        <ul className={` mr-24 md:flex gap-10 items-center hidden ${menuOpen == true ? `flex flex-row` : ``}`}>
          <li><a href="#" className=''>Home</a></li>
          <li><a href="#">App Features
          </a></li>
          <li><a href="#">About Us</a></li>
          <li className=' py-2 px-4 rounded-xl bg-blue-700 text-white font-sans font-semibold text-sm cursor-pointer'>Download Now</li>
        </ul>
        <div className=' md:hidden'>
          <div onClick={() => ToggleMenu()}>
            {menuOpen ? (<FaXmark className=' my-3 text-xl mr-5 ' />) : (<FaBars className=' my-3 text-xl mr-5 ' />)}
          </div>
          <div className=' '>
            <ul className={`flex flex-col z-50 bg-white absolute top-0 py-14 h-screen gap-8 -left-[20rem] w-[15rem] px-10 ${menuOpen ? 'left-0' : ' -left-[20rem] '} duration-1000`} >
              <li><a href="#" className=''><PiDotOutlineFill size={15}/>Home</a></li>
              <li><a href="#">App Features<AiOutlineDown size={20}/>
              </a></li>
              <li><a href="#">About Us</a></li>
              <li><button className='bg-[#670FF7] p-2 text-white rounded-lg hover:bg-purple-900'>Download Now</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;