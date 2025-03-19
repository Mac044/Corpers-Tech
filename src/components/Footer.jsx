import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black text-white'>
        <div className='container mx-auto px-4'>
            <div className=' lg:flex lg:justify-between lg:gap-0 gap-4 grid grid-cols-2'>
            <div className=' mt-5'>
                <h3>Contact Us</h3>
                <p className='mt-5'>For more information about the Corper's Tech Confrence get in touch with us on</p>
               <div className=' lg:flex lg:justify-between'>
                    <div>
                      <h2>Email</h2>
                      <h2>info@corperstechconfrence.ng</h2>
                    </div>
                    <div>
                        <p>Phone number</p>
                        <p>+234(0)8178624098</p>
                    </div>
                </div>
            </div>
             <div className=' mt-5'>
                <h3>Socials</h3>
                <div className=' flex mt-5 gap-1'>
                    <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1742387039/twitter-x-logo-black-round-20851_1_dlb6wh.png" alt="" />
                    <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1742387039/Vector_aeefid.png" alt="" />
                    <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1742387039/Vector_1_e3mscm.png" alt="" />
                    <img src="https://res.cloudinary.com/doawzlqxi/image/upload/v1742387040/icons_a0jvam.png" alt="" />
                </div>
             </div>
             <div className=' mt-5'>
                <h3>Quick Links</h3>
                <ul className=' mt-5'>
                    <li>About</li>
                    <li>Highlight</li>
                    <li>Speakers</li>
                    <li>Scholarship</li>
                    <li>Blog & Article</li>
                </ul>
             </div>
            </div>
            <div className='flex justify-between mt-5'>
                <p>©2024</p>
                <p>BACK TO TOP</p>
            </div>
            <img className=' mt-10' src="https://res.cloudinary.com/doawzlqxi/image/upload/v1742387895/Corpers_Tech_24_pzrjap.png" alt="" />
         </div>

    </section>
  )
}

export default Footer