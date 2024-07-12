import React, { useEffect } from 'react'

export const Cards = ({array,location,persons,effect,cards,setCards}) => {

  useEffect(()=> {
    const city = location.split(',')
            
let arrayFilter = location ? array.filter(array=> array.city === city[0] ) : array 

arrayFilter = persons ? arrayFilter.filter(array=> array.maxGuests >= persons) : arrayFilter 

 setCards(arrayFilter)
},[location,persons])

/* 
  useEffect(()=> {

const arrayFilter = persons ? array.filter(array=> array.maxGuests >= persons) : array 


 setCards(arrayFilter)
},[persons]) */

  return (
    <div className="cards">
    {
cards.map
((array, i) => {
  return <div className='card' key={i}>
    <div className='img'>
      <img src={array.photo} alt="imagen de apartamente" />
    </div>
    <div className='info'>
      {array.superHost && <span className='shost' ><strong>SUPER HOST</strong></span>}
      <span>{array.type}</span>
      {array.beds && <span> {array.beds} beds</span>}
      <span> ⭐ {array.rating}</span>
    </div>
    <div className="description"> {array.title}</div>
  </div>
})
}
</div>
  )
}
