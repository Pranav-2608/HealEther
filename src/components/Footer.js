import React from 'react';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

import Logo from '../assets/Logo.png'
const Footer = () => {
    return (
        <div className='border-t border-slate-300 mt-8 py-8'>
            <div className='w-[80%] mx-auto '>
                <div className='  flex flex-col md:flex-row '>
                    <div className=' w-[100%] md:w-[40%] h-[15rem]'>
                        <img src={Logo} alt="" className=' w-32 py-4' />
                        <p className=' text-slate-500'>YORE Care is a Health-tech SUPER APP to create an integrated Health Web to Digitize, Preserve records & Empower the Care Seeker.</p>
                        <div className='flex my-5'>
                            <FaFacebookSquare className=' text-2xl rounded-2xl text-slate-600 m-2'/>
                            <FaInstagramSquare className=' text-2xl rounded-2xl text-slate-600 m-2 '/>
                            <FaLinkedin className=' text-2xl rounded-2xl text-slate-600 m-2 '/>
                            <FaSquareXTwitter className=' text-2xl rounded-2xl text-slate-600 m-2 '/>
                        </div>
                    </div>

                    <div className=' w-[100%] md:w-[60%] flex flex-col md:flex-row'>
                        <div className='my-5 w-[100%] md:w-[40%]'>
                            <h2 className=' text-left text-md font-semibold text-slate-600'>YORE CARE</h2>
                            <ul>
                                <li className=' hover:border-b-2'>
                                    <a href="#">Partner</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className='my-5 w-[100%] md:w-[40%]'>
                            <h2 className=' text-left w-28 text-md font-semibold text-slate-600'>YORE CARE</h2>
                            <ul>
                                <li className=' hover:border-b-2'>
                                    <a href="#">Term of Services</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Return & Refund Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className='my-5 w-[100%] md:w-[40%]'>
                            <h2 className=' text-left w-28 text-md font-semibold text-slate-600'>YORE CARE</h2>
                            <ul>
                                <li className=' hover:border-b-2'>
                                    <a href="#">hello@yorecre.com</a>
                                </li>
                                <li>
                                    <a href="#">1234567890</a>
                                </li>
                                <li>
                                    <a href="#">B/106-107, Parmanand Ashok Nagar,Ambadi Rd. Vasai West, Maharashtra-401202</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
  
                <div>
                    <p>© 2023. All rights reserved by <a href="">Advance Digital Solutions</a>. </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;