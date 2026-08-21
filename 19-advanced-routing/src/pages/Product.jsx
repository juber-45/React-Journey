import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 py-4'>
        <Link className='hover:text-amber-400' to='/product/men'>Men</Link>
        <Link className='hover:text-amber-400' to='/product/women'>Women</Link>
        <Link className='hover:text-amber-400' to='/product/kids'>Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product