import React from 'react'

const RightCardContent = (props) => {
  console.log(props.color)
  return (
    <div>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className='z-10 h-full w-full absolute top-0 left-0 p-7 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold'>
         {props.id}
        </h2>
        <div>
          <p className='leading-5 text-white mb-10 text-sm tracking-wide'>
           {props.intro}
          </p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='rounded-full py-2 px-6 text-white text-md font-medium'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className='rounded-full py-2 px-6 text-white text-md font-medium'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent