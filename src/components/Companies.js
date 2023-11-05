import React from 'react'
import nha from '../assets/national-health-authority6597.jpg'
import admb from '../assets/ABDM+1+1 (1).png'
import digital from '../assets/digitalindia.png'
import makeinindia from '../assets/make-in-india-logo.png'

const Companies = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
            <div className='flex flex-col items-center gap-8 w-[24%] h-[20%]'>
                <div>
                  <img src={nha}/>
                </div>
                <div>
                   <p className='translate-y-8 text-[18px] font-semibold'>NHA APPROVED</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-8 w-[24%] h-[20%]'>
                <div>
                  <img src={admb}/>
                </div>
                <div>
                   <p className='text-[18px] font-semibold'>ABDM COMPLIANT</p>
                </div>
            </div>
            <div  className='flex flex-col items-center gap-8 w-[24%] h-[20%]'>
                <div>
                  <img src={digital}/>
                </div>
                <div>
                   <p className='text-[18px] font-semibold'>DIGITAL INDIA</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-8 w-[24%] h-[20%]'>
                <div>
                  <img src={makeinindia}/>
                </div>
                <div>
                   <p className='text-[18px] font-semibold'>MAKE IN INDIA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Companies