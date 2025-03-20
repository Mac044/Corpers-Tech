import React from 'react'
import Headers from './Headers'

const Blog = () => {
  return (
    <section>
        <div className='container mx-auto px-4'>
        <Headers text='About' title='Blog & Articles'/>
        <div className=' lg:flex'>
            <div className=''>
                <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1742209065/Frame_127_vmuhxl.png" alt="" />
                <h3 className=' mb-5 mt-5 font-semibold'>What Inspired this vision</h3>
                <p>We had a vision to reach as many Corps member as possible to enlighten them about tech and its emergence in the “work industry”. Our drive is to see that millions of youth....</p>
                <button className=' border py-2 px-4 border-orange-600 border-solid lg:mt-10'>Read blog</button>
            </div>
            <div>
                <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1742209065/Frame_127_vmuhxl.png" alt="" />
                <h3 className=' mt-5 mb-5 font-semibold'>What Inspired this vision</h3>
                <p>We had a vision to reach as many Corps member as possible to enlighten them about tech and its emergence in the “work industry”. Our drive is to see that millions of youth...</p>
                <button className=' border py-2 px-4 border-orange-600 border-solid lg:mt-10 lg:mb-10'>Read blog</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Blog