import React from 'react'
import Headers from './Headers'
import information from '@/Data'
import Highlight from './Highlight'

const Highlights = () => {
  return (
    <div className='container px-4 mx-auto py-8 grid gap-4 md:gap-6 lg:gap-8'>
        <Headers text='Learn' title='Key Hightlights'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 satoshi'>
            {information.map((item)=>{ return <Highlight {...item}/>})}
        </div>
    </div>
  )
}

export default Highlights