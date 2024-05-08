import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {

  return (
    <div className='w-[300px] flex-none h-auto bg-slate-800 text-white'>
      <div>
        <ul className=' pt-[10px] text-[25px]'>
          <li className=' hover:bg-slate-400 hover:text-black pl-[20px]'><NavLink to="/" >Dashboard</NavLink></li>
          <li className=' hover:bg-slate-400 hover:text-black pl-[20px]'><NavLink to="/admin">Admin</NavLink></li>
          <li className=' hover:bg-slate-400 hover:text-black pl-[20px]'><NavLink to="/student">Student</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar