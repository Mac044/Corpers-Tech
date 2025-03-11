import React from 'react'

const Highlight = ({icon, title, info}) => {
  return (
    <div>
    <img className=' pb-2' src= {icon} alt="" />
    <h1 className=' font-bold pt-2'>{title}</h1>
    <p className='text-base'>{info}</p>
  </div>
  )
}

export default Highlight