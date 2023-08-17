import React from 'react'
import { dataSet } from '../data'

const SideBar = ({ setIndex }) => {
  const handleClick = (id) => {
    setIndex(id);
  }
  return (
    <div className='w-[220px] h-[800px] border-r-2 border-gray-500'>
      {dataSet.map((data,id) => (
        <div key={id} onClick={()=>{handleClick(id)}} className='w-full text-center mb-4 mt-4'>{data.title}</div>

      ))}
  
    </div>
  )
}

export default SideBar