import React from 'react'

const Headers = ({title, text}) => {
  return (
    <div className="my-4">
    <p className=" lg:pt-0 pt-4 font-medium lg:text-lg satoshi">{text}</p>
    <h3 className="font-semibold clash text-orange-600 text-lg md:text-xl lg:text-2xl xl:text-3xl">{title}</h3>
</div>
  )
}

export default Headers