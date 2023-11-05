import React from 'react'
import LabBook from '../assets/Lab+booking.png'
import Teleconsult from '../assets/Online+Teleconsultation.png'
import Pharmacy from '../assets/pharmacy.png'

const Button2 = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-evenly gap-4  md:justify-between'>
        <div className='flex flex-col gap-4 border-blue-800 border-2 items-center jusify-between rounded-xl p-4 w-[30%] hover:scale-105 hover:shadow-xl'>
        <div>
           <img src={LabBook} className='w-[100px] h-[100px]'/>
        </div>
        <div>
          <h1 className='text-[24px] font-semibold text-center '>Lab Booking</h1>
        </div>
        <div>
          <p className='font-semibold text-center'>Find Labs, Book Home Services, And Get Reports On The YORE Care App!</p>
        </div>
        </div>
        <div className='flex flex-col gap-4 border-blue-800 border-2 items-center jusify-between rounded-xl p-4 w-[30%] hover:scale-105 hover:shadow-xl'>
        <div>
           <img src={Teleconsult} className='w-[100px] h-[100px]'/>
        </div>
        <div>
          <h1 className='text-[24px] font-semibold'>Online Teleconsultation</h1>
        </div>
        <div>
          <p className='font-semibold text-center'>Find Doctors, Clinics, And Book Appointments With The YORE Care App!</p>
        </div>
        </div>
        <div className='flex flex-col gap-4 border-blue-800 border-2 items-center jusify-between rounded-xl p-4 w-[30%] hover:scale-105 hover:shadow-xl'>
        <div>
           <img src={Pharmacy} className='w-[100px] h-[100px]'/>
        </div>
        <div>
          <h1 className='text-[24px] font-semibold'>Pharmacy and Health Store</h1>
        </div>
        <div>
          <p className='font-semibold text-center'>Buy Medicines, Health, And Wellness Products From The YORE Care App!</p>
        </div>
        </div>
    </div>
  )
}

export default Button2