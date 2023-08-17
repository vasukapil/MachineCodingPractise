import React from 'react'
import { useState } from 'react'
import RightSideContent from './RightSideContent'
import SideBar from './SideBar'

const MainBody = () => {
  const [index,setIndex] = useState(0);
  return (
    <div className='flex items-center'>
        <SideBar setIndex={setIndex}/>
        <RightSideContent index={index}/>
    </div>
  )
}

export default MainBody