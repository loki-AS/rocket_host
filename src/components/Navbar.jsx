import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineCaretDown, AiOutlineClose, AiOutlineDown } from "react-icons/ai"
import { navLinks } from '../constants';
import { Logo } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState("Build");
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex p-6 justify-between items-center navbar shadow-md bg-white sticky top-0'>
        <img src={Logo} alt="logo" className='h-10' />
        <h1 className='text-2xl uppercase font-poppins font-bold tracking-[2px] text-gradient'>Rocket Hosting</h1>
        <ul className='list-none text-gray-500 sm:flex hidden justify-end items-center flex-1 mx-2'>
          {
            navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className='font-poppins ml-5 font-medium cursor-pointer text-[16px]'
              onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }                        
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {
            !toggle ? (
                <GiHamburgerMenu className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)} />
            ) : (
                <AiOutlineClose className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(false)} />
            )
          }
          <div
           className={`${
            !toggle ? "hidden" : "flex"
          } p-6 shadow-md z-10 bg-white text-gray-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {
            navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className='font-poppins ml-1 mb-5 font-medium cursor-pointer text-[16px]'
              onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }              
            </ul>
            </div>  
        </div>
    </nav>
  )
}

export default Navbar