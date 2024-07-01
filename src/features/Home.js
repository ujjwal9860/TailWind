import React from 'react'

import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>

      <h1> Home</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos laudantium saepe itaque quasi cupiditate odio labore doloremque totam, modi incidunt eaque, voluptatum aperiam eveniet soluta est et pariatur earum excepturi?</p>

      <NavLink to='/' className='bg-slate-800 text-white' >Go to Child1</NavLink> <br />
      <NavLink to='/child2' className='bg-red-500 text-white' >Go to Child2</NavLink>

      <Outlet />

    </div>
  );
}

export default Home
