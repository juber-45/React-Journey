import React from 'react'
import { useNavigate } from 'react-router-dom'


const Nav2 = () => {

  let navigate = useNavigate();

  return (
    <div className='bg-indigo-400 mt-1'>
      <button
        onClick={() => {
          navigate('/')
        }}
        className='bg-blue-900 cursor-pointer active:scale-95 text-white py-2 px-5 m-2 rounded'>
        Return to Home
      </button>
      <button
        onClick={() => {
          navigate(-1)
        }}
        className='bg-blue-900 cursor-pointer active:scale-95 text-white py-2 px-5 m-2 rounded'>
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1)
        }}
        className='bg-blue-900 cursor-pointer active:scale-95 text-white py-2 px-5 m-2 rounded'>
        Next
      </button>
    </div>
  )
}

export default Nav2