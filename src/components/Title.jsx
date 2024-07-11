import React from 'react'

export const Title = ({array,location}) => {
  
  const arrayFilter = location ? array.filter(array=> array.city === location) : array
 
  return (
    <div className="title">
    <span className='tp'>Stays in Finland</span> <span className='numbers'>{arrayFilter.length>12 ? '12+ Stays': `${arrayFilter.length} Stays`}</span>
  </div>
  )
}
