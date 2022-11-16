import React from 'react'
import { BuildDesign, Grow } from '../assets'
import { TiTick } from "react-icons/ti"
import { IoIosArrowForward } from "react-icons/io"

const GrowPage = () => {
  return (
    <section id="grow">
    <div className='flex flex-col sm:flex-row px-10 pt-3'>
    <div className='w-[100%] sm:w-[120%] pt-0 sm:pt-5'>
    <img src={Grow} alt="grow" />    
    </div>
    <div className='ml-3 pt-1'>
    <button className='border-0 font-poppins bg-orange-100 p-2 rounded-md hover:bg-orange-600 hover:text-white focus:border-bg-orange-200 border-orange-400 focus:outline-none focus:ring focus:ring-orange-400 text-orange-500 font-bold'>Grow</button>
        <h1 className='text-3xl py-2 font-bold'>Design freely, build faster</h1>
        <h4 className='text-2xl py-2 font-poppins '>Currently in Alpha</h4>
        <p className='text-xl font-poppins text-gray-500'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='flex py-2'>
         <TiTick className='text-orange-500' size={30} />   <p className='text-xl font-semibold'>One platform to manage your app, customer and payments</p>
        </div>
        <div className='flex '>
         <TiTick className='text-orange-500' size={30} />   <p className='text-xl font-semibold'>A CRM to manage your customers</p>
        </div>
        <div className='flex py-2'>
         <TiTick className='text-orange-500' size={30} />   <p className='text-xl font-semibold'>Reporting to pinpoint your growth</p>
        </div>  
        <div className='flex py-2 cursor-pointer'>
        <p className='text-xl text-orange-500 hover:text-orange-600 hover:underline'>Manage your web app</p> <IoIosArrowForward size={30} className="text-orange-500 pt-1" />
        </div>                      
    </div>
</div>
</section>
  )
}

export default GrowPage