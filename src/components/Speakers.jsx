import React from 'react'
import Headers from './Headers'
import People from '@/Datas'

const Speakers = () => {
  return (
    <section className='container mx-auto px-4 py-8 grid gap-4 md:gap-6 lg:gap-8'>
        <Headers text='Speakers' title='Meet our Speakers & Panelists'/>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 gap-7 py-6 text-center'>
            {People.map((items)=>{ return<Speakers {...items}/>})}
        </div>
    </section>
  )
}

export default Speakers