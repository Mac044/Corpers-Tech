import React from 'react'
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }


  return (
    
    <div>
        <nav className=' bg-black relative flex justify-between p-2   lg:py-5'>
          <div className=' lg:flex justify-between container mx-auto px-4 '>
          <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1741281963/Vector_f0y9op.svg" alt="Logo" />
        <ul className=' text-white lg:flex lg:justify-center lg:gap-8 
        lg:text-white-800 hidden'>
            <li>About</li>
            <li>Highlights</li>
            <li>Speakers</li>
            <li>Scholarship</li>
            <li>Blog</li>
        </ul>
          </div>

        <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen && 'active'} nav-icon lg:hidden w-[24px] h-[18px] flex flex-col justify-between cursor-pointer`}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <section className={`${isOpen ? 'active-menu' : 'mobile-menu'} menu transition-all absolute bg-black p-4 top-full left-0 w-full z-40`}>
          <ul className=' flex flex-col gap-4 text-right text-white font-bold text-lg'>
            <li>About</li>
            <li>Hightligh</li>
            <li>Speakers</li>
            <li>Scholarship</li>
            <li>Blog & Article</li>
          </ul>
        </section>

        </nav>
    </div>
  )
}

export default Navbar