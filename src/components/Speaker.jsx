import React from 'react'

const Speaker = ({image, name, work}) => {
  return (
    <div className='flex flex-col items-center'>
        <img className='' src={image} alt={name} />
        <h1 className=' pt-2 font-bold'>{name}</h1>
        <p className=''>{work}</p>
    </div>
  )
}

export default Speaker