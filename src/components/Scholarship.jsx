import React from 'react'
import Headers from './Headers'

const Scholarship = () => {
  return (
    <section>
           <div className='container mx-auto px-4 lg:flex'>
        <div>
            <Headers text='Education' title='Scholarship'/>
            <p>
            We are excited to offer 1,000 scholarships to study various tech skills. These scholarships are aimed at empowering corps members with both coding and non-coding skills necessary for the digital economy.
            </p>
            <h4>Skills Covered</h4>
            <ul>
                <li>- Coding (JavaScript, Python, HTML/CSS, etc.)</li>
                <li>- Data Science and Analytics</li>
                <li>- Cybersecurity</li>
                <li>- Digital Marketing</li>
                <li>- Blockchain Technology</li>
                <li>- UI/UX Design</li>
                <li>- Cloud Computing and many more</li>
            </ul>
            <h4>How To Apply</h4>
            <p>Details on the application process will be available soon. Stay tuned!</p>
        </div>
        <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1742209068/Rectangle_11_rrcifo.png" alt="" />

    </div>
    </section>
  )
}

export default Scholarship