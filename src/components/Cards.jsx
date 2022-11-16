import React from 'react'
import { BiCustomize, BiLock, BiWorld } from "react-icons/bi"
import { GrIntegration } from "react-icons/gr"

const Cards = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between my-5 mx-10'>
        <div className='boreder rounded-lg shadow-2xl m-3 p-5 bg-white'>
            <div className='flex flex-col justify-center items-center'>
            <BiCustomize size={40} className="bg-blue-100 rounded-lg shadow-xl text-blue-500" />
            <h1 className='text-2xl font-bold py-2'>Customizable</h1>
            </div>
            <p className='text-gray-500 font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='boreder rounded-lg shadow-2xl m-3 p-5 bg-white'>
            <div className='flex flex-col justify-center items-center'>
            <BiWorld size={40} className="bg-green-100 rounded-2xl shadow-xl text-green-500" />
            <h1 className='text-2xl font-bold py-2'>Open-source</h1>
            </div>
            <p className='text-gray-500 font-poppins'>In aliquam sem fringilla ut. Et ultrices neque ornare aenean euismod elementum nisi quis. Lorem donec massa sapien faucibus et. Aliquam ultrices sagittis orci a scelerisque. Lorem sed risus ultricies tristique nulla aliquet enim. At volutpat diam ut venenatis tellus.</p>
        </div>
        <div className='boreder rounded-lg shadow-2xl m-3 p-5 bg-white'>
            <div className='flex flex-col justify-center items-center'>
            <GrIntegration size={40} className="bg-yellow-100 shadow-md rounded-md p-1" />
            <h1 className='text-2xl font-bold py-2'>Integrations</h1>
            </div>
            <p className='text-gray-500 font-poppins'>Sodales ut etiam sit amet nisl purus in. Tristique senectus et netus et malesuada. Aliquet nec ullamcorper sit amet risus. Pellentesque dignissim enim sit amet venenatis. Adipiscing bibendum est ultricies integer. Aenean et tortor at risus viverra. Ornare lectus sit amet est placerat in egestas erat imperdiet.</p>
        </div>
        <div className='boreder rounded-lg shadow-2xl m-3 p-5 bg-white'>
            <div className='flex flex-col justify-center items-center'>
            <BiLock size={40} className="bg-red-100 shadow-md rounded-lg text-red-500" />
            <h1 className='text-2xl font-bold py-2'>Security</h1>
            </div>
            <p className='text-gray-500 font-poppins'>Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Ultrices mi tempus imperdiet nulla. Netus et malesuada fames ac. Malesuada fames ac turpis egestas sed tempus. Odio eu feugiat pretium nibh ipsum consequat nisl. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.</p>
        </div>
    </div>
  )
}

export default Cards