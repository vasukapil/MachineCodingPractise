import React from 'react'
import { useContext } from 'react'
import { ToggleContext } from '../context/toggle'

const Button = () => {
    const {handleToggle,theme} = useContext(ToggleContext)

  return (
    <button onClick={handleToggle}>{theme}</button>

  )
}

export default Button