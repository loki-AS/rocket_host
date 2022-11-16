import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 md:space-y-0 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-md text-gray-800'>
            <h5 className='font-bold uppercase font-poppins'>About</h5>
            <p className='cursor-pointer text-gray-500 hover:underline'>Learn about new features</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Letter from our founders</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Careers</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Investors</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Newsroom</p>
        </div>
        <div className='space-y-4 text-md text-gray-800'>
            <h5 className='font-bold uppercase font-poppins'>Hosting</h5>
            <p className='cursor-pointer text-gray-500 hover:underline'>Try hosting</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Build a web app</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Host a web app</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Manage a web app</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>How to host responsibly</p>
        </div>
        <div className='space-y-4 text-md text-gray-800'>
            <h5 className='font-bold uppercase font-poppins'>Community</h5>
            <p className='cursor-pointer text-gray-500 hover:underline'>disaster relief housing</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Support Afghan refugees</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Combating discrimination</p>
        </div>
        <div className='space-y-4 text-md text-gray-800'>
            <h5 className='font-bold uppercase font-poppins'>Support</h5>
            <p className='cursor-pointer text-gray-500 hover:underline'>ContactUs</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>AirCover</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Safety information</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Supporting people with disabilities</p>
            <p className='cursor-pointer text-gray-500 hover:underline'>Cancellation options</p>
        </div>
    </div>
  )
}

export default Footer