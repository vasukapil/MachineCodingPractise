import React from 'react'
import { AccordianData } from '../data'
import AccordianContent from './AccordianContent'

const Accordian = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-500px h-auto mt-6 border border-gray-700 p-8'>
        <AccordianContent data = {AccordianData}/>
        </div>

    </div>
  )
}

export default Accordian