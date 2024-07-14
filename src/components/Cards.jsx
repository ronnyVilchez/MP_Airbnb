import React, { useEffect } from 'react'
import star from '/images/star.png'
export const Cards = ({ array, location, persons, cards, setCards }) => {

  useEffect(() => {
    const city = location.split(',')

    let arrayFilter = location ? array.filter(array => array.city === city[0]) : array

    arrayFilter = persons ? arrayFilter.filter(array => array.maxGuests >= persons) : arrayFilter

    setCards(arrayFilter)
  }, [location, persons])

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
                <div><img src={star} alt="star" /> <span> {array.rating}</span></div>
              </div>
              <div className="description"> {array.title}</div>
            </div>
          })
      }
    </div>
  )
}
