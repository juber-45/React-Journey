import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-700 py-4 px-6'>
      <h3 className='text-xl font-semibold cursor-pointer'>Navbar</h3>
      <div className='flex gap-8'>
        <Link className='text-md font-semibold' to='/'>Home</Link>
        <Link className='text-md font-semibold' to='/about'>About</Link>
        <Link className='text-md font-semibold' to='/product'>Product</Link>
        <Link className='text-md font-semibold' to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar