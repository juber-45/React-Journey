import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='scrollbar' className='p-6 flex flex-nowrap shrink-0 overflow-x-auto gap-10 h-full w-2/3'>
      {props.users.map(function(elem, idx) {
        return (
          <RightCard intro={elem.intro} color={elem.color} key={idx} id={idx+1} img= {elem.img} tag={elem.tag} />
        )
      })}
    </div>
  )
}

export default RightContent