import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Questions = () => {
  return (
    <section id="company">
    <div className='py-8 my-5 mx-10 sm:mx-36'>
        <div className='bg-blue-gradient px-5 p-3 rounded-3xl'>  
       <div className='flex flex-col justify-between items-center'>
        <h1 className='text-3xl font-bold font-poppins text-white p-2'>FAQs</h1>
        <p className='flex-1 text-slate-500 text-xl font-poppins'>Tellus in metus vulputate eu scelerisque felis imperdiet. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Amet nisl purus in mollis nunc sed id semper. Malesuada proin libero nunc consequat interdum. Feugiat sed lectus vestibulum mattis. Eget egestas purus viverra accumsan in nisl nisi.</p>
        </div> 
        <div className='flex py-3 flex-col sm:flex-row justify-between items-center'>
            <div className='flex border-0 p-3 text-white rounded-lg shadow-2xl hover:underline cursor-pointer bg-blue-gradient hover:bg-none'>
            <h1 className='text-xl font-poppins'>When is the launch?</h1> 
            <AiOutlineArrowRight className='ml-[135px]' size={23} />         
            </div>
            <div className='flex border-0 mt-5 sm:mt-0 p-3 rounded-lg text-white shadow-2xl hover:underline cursor-pointer bg-blue-gradient hover:bg-none'>
            <h1 className='text-xl font-poppins'>Do I need to know how to code?</h1> 
            <AiOutlineArrowRight className='ml-5' size={23} />         
            </div>
        </div>
        <div className='flex py-3 flex-col sm:flex-row justify-between items-center'>
            <div className='flex border-0 p-3 text-white rounded-lg shadow-2xl hover:underline cursor-pointer bg-blue-gradient hover:bg-none'>
            <h1 className='text-xl font-poppins'>Is this open source?</h1> 
            <AiOutlineArrowRight className='ml-[135px]' size={23} />         
            </div>
            <div className='flex border-0 mt-5 sm:mt-0 p-3 rounded-lg text-white shadow-2xl hover:underline cursor-pointer bg-blue-gradient hover:bg-none'>
            <h1 className='text-xl font-poppins'>Can I build a website?</h1> 
            <AiOutlineArrowRight className='ml-[120px]' size={23} />         
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Questions