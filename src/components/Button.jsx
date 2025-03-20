import React from 'react'

const Button = ({text}) => {
  return (
     <div className='my-4'>
        <div className=" border py-2 px-4 border-orange-500 border-solid text-secondarybg-orange-500">{text}</div>
     </div>
  )
}

export default Button