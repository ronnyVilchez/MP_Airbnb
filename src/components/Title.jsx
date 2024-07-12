import React from 'react'

export const Title = ({cards}) => {
   
  return (
    <div className="title">
    <span className='tp'>Stays in Finland</span> <span className='numbers'>{cards.length>12 ? '12+ Stays': `${cards.length} Stays`}</span>
  </div>
  )
}
