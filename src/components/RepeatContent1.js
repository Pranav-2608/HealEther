import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'

const RepeatContent1 = (props) => {

  return (

    <div className="mt-6">
    <div className="flex flex-col gap-10 items-center justify-center">
            <div className="mt-10">
              <h1 className="bg-green-100 text-green-500 p-2 font-bold">
                {props.data.head}
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-[50px] text-center">
                {props.data.h}
              </h1>
              <p className="text-[25px] mt-4 text-center">
                {props.data.para}
              </p>
            </div>
            <div className="flex items-center justify-evenly gap-4">
              <button className="bg-purple-700 border text-white p-2 px-4 rounded-lg text-[20px] uppercase">
                <div className='flex items-center gap-2'>{props.data.btn1}<AiOutlineArrowRight/></div>
              </button>
              <button className="p-2 rounded-lg border px-4 text-[20px] uppercase">
                Know More
              </button>
            </div>
          </div>
          </div>
  );
}

export default RepeatContent1;