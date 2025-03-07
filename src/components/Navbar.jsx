import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className=' flex bg-black justify-between px-40'>
        <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1741281963/Vector_f0y9op.svg" alt="Logo" />
        <ul className=' text-white lg:flex lg:justify-center lg:gap-7 lg:text-white-800 '>
            <li>About</li>
            <li>Highlights</li>
            <li>Speakers</li>
            <li>Scholarship</li>
            <li>Blog</li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar