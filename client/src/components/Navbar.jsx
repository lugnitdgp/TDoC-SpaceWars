import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-black px-6 py-4 flex justify-between items-center shadow-lg'>
        <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500'>
            SpaceWars
        </div>
        <div className='flex space-x-8'>
            <NavLink to="/profile" className={({isActive}) => `text-lg font-semibold ${isActive ? "text-white underline underline-offset-4" : "text-gray-400 hover:text-white"} transition-all duration-300`} >
                Profile
            </NavLink>
            <NavLink to="/market" className={({isActive}) => `text-lg font-semibold ${isActive ? "text-white underline underline-offset-4" : "text-gray-400 hover:text-white"} transition-all duration-300`} >
                Market
            </NavLink>
            <NavLink to="/game" className={({isActive}) => `text-lg font-semibold ${isActive ? "text-white underline underline-offset-4" : "text-gray-400 hover:text-white"} transition-all duration-300`} >
                Game
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar