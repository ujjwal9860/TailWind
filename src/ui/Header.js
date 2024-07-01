import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white flex items-baseline justify-between px-4 py-2'>
      <h1 className='text-2xl'>TailWind</h1>
      <nav className='space-x-4'>
        <NavLink to='/about' className={(navData) => navData.isActive ? 'bg-orange-300' : ' bg-red-400'
        }>About</NavLink>

        <NavLink to='/contact' className={(navData) => navData.isActive ? 'bg-blue-500' : 'bg-red-400'}> Contact </NavLink>
      </nav>

    </div >
  )
}

export default Header
