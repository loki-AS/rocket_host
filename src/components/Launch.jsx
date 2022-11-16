import React, { useEffect, useState } from 'react'
import { BuildDesign, LaunchPic } from '../assets'
import { TiTick } from "react-icons/ti"
import { IoIosArrowForward } from "react-icons/io"

const Launch = () => {

  const [date , setDate] = useState();

  const getYear = () =>  setDate(new Date().getFullYear())


  useEffect(() => {
      getYear();
  }, [])

  return (
    <div className='flex flex-col bg-slate-100 sm:flex-row px-10 pt-10 my-3'>
    <div className='ml-3 pt-1'>
    <button className='border-0 font-poppins bg-green-100 p-2 rounded-md hover:bg-green-600 hover:text-white focus:border-bg-green-200 border-green-400 focus:outline-none focus:ring focus:ring-green-400 text-green-500 font-bold'>Launch</button>
        <h1 className='text-3xl py-2 font-bold'>Host securely, deploy easily</h1>
        <h4 className='text-2xl py-2 font-poppins '>Launch in {date + 1}</h4>
        <p className='text-xl font-poppins text-gray-500'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   
        </p>
        <div className='flex py-2'>
         <TiTick className='text-green-500' size={30} />   <p className='text-xl font-semibold'>Host your web app in just a few clicks</p>
        </div>
        <div className='flex '>
         <TiTick className='text-green-500' size={30} />   <p className='text-xl font-semibold'>Add your own custom domain</p>
        </div>
        <div className='flex py-2'>
         <TiTick className='text-green-500' size={30} />   <p className='text-xl font-semibold'>Controlled Privacy</p>
        </div>  
        <div className='flex py-2 cursor-pointer'>
        <p className='text-xl text-green-500  hover:text-green-600 hover:underline'>Host your web app</p> <IoIosArrowForward size={30} className="text-green-500 pt-1" />
        </div>                      
    </div>
    <div className='w-[100%] sm:w-[130%] mb-0 sm:mb-5'>
    <img src={LaunchPic} alt="launch" />    
    </div>
</div>
  )
}

export default Launch