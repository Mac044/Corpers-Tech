import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
      <div>
        <div className=' bg-black'>
            <div className=' lg:h-[85vh] h-[50vh] lg:min-h-[60svh] lgbg'>
                <div className=' container mx-auto px-4 lg:pt-44 pt-24 '>

                  <section className=' loader mb-8 w-[48px] h-[18px] flex justify-between items-center '>
                    <span></span>
                    <span></span>
                    <span></span>
                  </section>

                <h1 className=' lg:w-4/6 font-bold md:text-5xl lg:text-7xl xl:text-8xl clash text-4xl  text-white'>
                    Corper's Tech Conference 
                    <sup className='text-orange-600 font-normal text-2xl lg:text-4xl'>2024</sup>
                </h1>
                <p className='text-white lg:w-6/12 lg:text-2xl '>Empowering Nigeria's Future Leaders Through Technology An initiative of O3 Finance School</p>

                <div className='flex justify-end'>
                  <section className='loader my-8 w-[48px] h-[18px] flex justify-between items-center'>
                     <span></span>
                     <span></span>
                     <span></span>
                  </section>
                </div>
               
                </div>
            </div>
            <div className=' lg:bg-orange-600 bg-black lg:h-4'></div>
        </div>
    </div>
    </div>
  )
}

export default Hero