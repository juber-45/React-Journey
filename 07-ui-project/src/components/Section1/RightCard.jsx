import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full w-[18rem] bg-fuchsia-700 relative overflow-hidden rounded-4xl '>
      <img className='h-full w-full obje  ct-cover' src={props.img} alt="working people" />
      <RightCardContent intro={props.intro} color={props.color} id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard