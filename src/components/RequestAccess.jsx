import React from 'react'

const RequestAccess = () => {
  return (
    <section id="request">
    <div className='my-5 mb-10 mx-3 flex flex-col justify-center pt-8 items-center'>
        <h1 className='flex justify-center  text-center  font-bold text-3xl'>Request Access</h1>
        <p className='flex justify-center font-poppins text-center text-gray-500 m-5 md:mx-56 mt-6 text-xl'>We will notify you when Logo is ready to speed up your development.</p>
        <div className='mt-6'>
            <input type="email" placeholder='Enter your Email' required className='p-2 border-1 rounded-lg bg-slate-100 font-poppins focus:border-bg-blue-200 border-blue-300 focus:outline-none focus:ring focus:ring-blue-300' />
            <button className='ml-3 border font-poppins bg-blue-500 p-1 rounded-md hover:bg-blue-600 focus:border-bg-blue-200 border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 text-white'>Request Access</button>
        </div>
    </div>
    </section>
  )
}

export default RequestAccess