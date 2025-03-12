import React from 'react'
import Headers from './Headers'

const About = () => {
  return (
    <div className=' container mx-auto px-4  lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4'>
        <div>
            <Headers text='About' title='Learn about the confrence'/>
            <p>
               Welcome to the Corper's Tech Conference, an innovative initiative  by O3 Finance School designed to equip over 5,000 National Youth Service Corps (NYSC) members with the tools and knowledge needed to thrive in the digital age. Our goal is to empower Nigeria's youth by showcasing career opportunities in the tech industry, providing scholarships, practical skills and networking opportunities.
            </p>
            <p className=' mt-2'>
               Join us at Corpers Tech Conference 2024 and unlock a world of opportunities. Being a dependent youth after service could be shameful. Take this chance to set the tune of your life, and pave the way for financial independence and freedom.
               Corpers Tech Conference 2024 is where vision meets reality, and ideas come to life. Plus, discover code and non-code opportunities that lie in Tech. You may be part of the 1000 persons to get scholarships to study code and non-code Tech courses. 
               It's time to level up and explore your Tech Potential!
               Let the genius in you out!!!
            </p>
        </div>
        <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1741603314/Rectangle_11_s0ct5a.png" alt="" />
        <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1741603509/Rectangle_11_1_bsbxyo.png" alt="" />
        <div className=''>
            <h3 className=' mt-2'>Vision</h3>
            <p className=' mt-3'>To establish a dynamic platform that deepens corps members' understanding of technology's transformative potential, empowering them to forge impactful careers, entrepreneurship ventures and drive Nigeria's development.</p>
            <h3 className=' mt-3'>Objectives</h3>
            <ul className=''>
                <li className=' mt-2'>1. Showcase Boundless Opportunities: Highlight various career paths within the tech industry.</li>
                <li className=' mt-2'>2. Empowerment through Knowledge: Provide practical knowledge and skills through workshops and sessions.</li>
                <li className=' mt-2'>3. Networking and Collaboration: Facilitate meaningful connections between corps members and industry professionals.</li>
                <li className=' mt-2'>4. Inspire Innovation: Encourage creative thinking and problem- solving through interactive sessions and hackathons.</li>
            </ul>
        </div>
    </div>
  )
}

export default About