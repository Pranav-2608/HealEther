import React from 'react';

// import AiFillStar from 'aiFillStar'
import { AiFillStar } from 'react-icons/ai';
const Testimonial = () => {
    return (
        <div>
            <div className='flex flex-col items-center w-[80%] mx-auto mt-8' >
                <h4 className='bg-green-100 text-green-500 p-2 font-bold'>TESTIMONIALS</h4>
                <h2 className=' text-[32px]  py-6 font-bold text-center'>Checkout what people are saying about their experiences.</h2>
                <div className='flex flex-col md:flex-row gap-4 my-6 flex-wrap'>
                    <div className='card w-[100%] md:w-[30%] p-6  rounded-xl shadow-md shadow-gray-800'>
                        <h2 className=' text-xl font-semibold opacity-90'>PARITOSH</h2>
                        <p className=' text-gray-500'>05-02-2022</p>
                        <div className='flex'>
                            <AiFillStar className=' text-yellow-400 text-xl' />
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                        </div>
                        <p className=' text-md my-2 text-gray-600'>YORE Care App made my ABHA creation very easy. It is a user-friendly app that empowers you to take control of your healthcare journey like never before.</p>
                    </div>
 
                    <div className='card w-[100%] md:w-[30%] p-6  rounded-xl shadow-md shadow-gray-800'>
                        <h2 className=' text-xl font-semibold opacity-90'>KETAKI</h2>
                        <p className=' text-gray-500'>10-10-2022</p>
                        <div className='flex'>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                        </div>
                        <p className=' text-md my-2 text-gray-600'>I used the YORE Care app to make my ABHA ID. Now it is my go-to app. I have saved my health documents, and synced my health devices with it. Now I do not have to use multiple apps.</p>
                    </div>

                    <div className='card w-[100%] md:w-[30%] p-6 rounded-xl shadow-md shadow-gray-800'>
                        <h2 className=' text-xl font-semibold opacity-90'>ANUJ</h2>
                        <p className=' text-gray-500'>04-7-2023</p>
                        <div className='flex'>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                            <AiFillStar className=' text-yellow-400 text-xl'/>
                        </div>
                        <p className=' text-md my-2 text-gray-600'>I find YORE Care very helpful it's very easy for me to order medicine online from my local chemist. Their team of pharmacists is outstanding!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;