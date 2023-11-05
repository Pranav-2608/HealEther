import React from 'react'
import Convinience from '../assets/Convenience.png'
import Accessiblility from '../assets/Accessibility.png'
import Security from '../assets/Security.png'

const Button = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-evenly gap-4'>
    <div className='flex gap-4 border-blue-800 border-2 items-center jusify-between flex-col lg:flex-row rounded-xl p-4  w-[30%] '>
        <div>
          <h1 className='text-[32px]'>Convenience</h1>
        </div>
        <div>
           <img src={Convinience} className='w-[100px] h-[100px]'/>
        </div>
    </div>
    <div className='flex gap-4 border-blue-800 border-2 items-center jusify-between flex-col lg:flex-row rounded-xl p-4  w-[30%] '>
        <div>
          <h1 className='text-[32px]'>Accessibility</h1>
        </div>
        <div>
           <img src={Accessiblility} className='w-[100px] h-[100px]'/>
        </div>
    </div>
    <div className='flex gap-4 border-blue-800 border-2 items-center jusify-between flex-col lg:flex-row rounded-xl p-4  w-[30%] '>
        <div>
          <h1 className='text-[32px]'>Security</h1>
        </div>
        <div>
           <img src={Security} className='w-[100px] h-[100px]'/>
        </div>
    </div>
    </div>
  )
}

export default Button