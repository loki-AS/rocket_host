import React from 'react'
import { BuildDesign } from '../assets'
import { TiTick } from "react-icons/ti"
import { IoIosArrowForward } from "react-icons/io"

const WebBuild = () => {
  return (
    <div className='flex flex-col sm:flex-row px-10 pt-3 mb-3'>
        <div className='w-[100%] sm:w-[160%] pt-0 sm:pt-5'>
        <img src={BuildDesign} />    
        </div>
        <div className='ml-3 pt-1'>
        <button className='border-0 font-poppins bg-purple-100 p-2 rounded-md hover:bg-purple-600 hover:text-white focus:border-bg-blue-200 border-purple-400 focus:outline-none focus:ring focus:ring-purple-400 text-purple-500 font-bold'>Build</button>
            <h1 className='text-3xl py-2 font-bold'>Design freely, build faster</h1>
            <h4 className='text-2xl py-2 font-poppins '>Currently in Alpha</h4>
            <p className='text-xl font-poppins text-gray-500'>
                All tech startups run into the same problems, lengthy dev times, tedious repetition, and multiple headaches.
                Logo sloves these problems, speeding up the dev process by eliminating repetition and automating workflows.
            </p>
            <div className='flex py-2'>
             <TiTick className='text-purple-500' size={30} />   <p className='text-xl font-semibold'>Automate your backend</p>
            </div>
            <div className='flex '>
             <TiTick className='text-purple-500' size={30} />   <p className='text-xl font-semibold'>Use components to build your web app</p>
            </div>
            <div className='flex py-2'>
             <TiTick className='text-purple-500' size={30} />   <p className='text-xl font-semibold'>Design with an intuitive UI Builder</p>
            </div>  
            <div className='flex py-2 cursor-pointer'>
            <p className='text-xl text-purple-500 hover:text-purple-600 hover:underline'>Build your web app</p> <IoIosArrowForward size={30} className="text-purple-500 pt-1" />
            </div>                      
        </div>
    </div>
  )
}

export default WebBuild