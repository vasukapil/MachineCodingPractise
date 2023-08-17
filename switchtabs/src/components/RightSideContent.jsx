import React from 'react'
import { dataSet } from '../data'

const RightSideContent = ({index}) => {
  const filteredData = dataSet.filter((data, idx) => index === idx);
  return (
    <div className='w-[900px]'>
      {filteredData.map((data, idx) => (
        <div key={idx}>
          <p>{data.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default RightSideContent