import React, { useEffect, useState } from 'react'
import icon2 from '/src/assets/icon2.svg'
import maps from '/src/assets/mapsGg.svg'

export const Nav = ({ icon, array, openLocation, modal, setModal, setLocation, location, openGuests, modal2,
  setModal2, persons, setPersons, setEffect, effect }) => {
  const [adult, setAdult] = useState(0)
  const [childrens, setChildrens] = useState(0)
  const [guest, setGuest] = useState(false)
  const [lot, setLot] = useState(false)

  function spanClicLocation(e) {
    if (e.target.tagName === 'SPAN') {
      setLocation(e.target.textContent);

    }
  }

  function inputChangeLocation(e) {
    setLocation(e.target.value);

  }

  function inputChangeGuest(e) {

    setPersons(e.target.value)

    if (e.target.value) {
      setAdult(0)
      setChildrens(0)
    }
  }

  useEffect(() => {

    const per = adult + childrens
    setPersons(per)
  }, [adult, childrens])



  function searchStays() {
    const person = adult + childrens
    setPersons(person)
    //setEffect(!effect)
    setModal(!modal)
    // setModal2(!modal2)

  }

function opened() {
  setModal(true)
}

  function openMdI(e) {

if(e.target.tagName !== 'BUTTON')
   { setLot(false)
    guest ? setGuest(false) : setGuest(true)}

   /*  setModal(true) */
  }
  function openMdL() {
    lot ? setLot(false) : setLot(true)

    setGuest(false)
  /*   setModal(true) */
  }

  return (


    !modal ?

      (<nav className='nav '>
        < div className='divLocation' >

          <input id='in1' className='in1' value={location} type="text" placeholder='Add location' readOnly onClick={opened} required />
        </div >


        <div className="divGuests">

          <input type="text" id='in2' className='in2' value={(persons === 0 ? '' : `${persons} guest` )} placeholder='Add guests' readOnly onClick={opened} />
        </div>
        <button onClick={searchStays} className='search' > <img src={icon} alt="search" /></button>

      </nav >)

      :
      (<nav className='navActive'>
        <div className='divLocationActive'  >
          <div className='inputL' onClick={openMdL} >
            <label htmlFor="in1">LOCATION</label>
            <input id='in1' className='in1Active' value={location} type="text" placeholder='Add location' onChange={inputChangeLocation} />
          </div>
          {lot &&
            <div className='locations' onClick={spanClicLocation}>
              <span><img src={maps} alt="iconMaps" />Helsinki, Finland</span>
              <span><img src={maps} alt="iconMaps" />Turku, Finland</span>
              <span><img src={maps} alt="iconMaps" />Vaasa, Finland</span>
              <span><img src={maps} alt="iconMaps" />Oulu, Finland</span>
            </div>}
        </div>

        <div className="divGuestsActive" >
          <div className="inputG" onClick={openMdI}  >
            <label htmlFor="in2">GUESTS</label>
            <input type="text" id='in2' className='in2Active' value={(persons === 0 ? '' : `${persons} guest` )} placeholder='Add guests' onChange={inputChangeGuest} readOnly/>
          </div>
          {guest &&
            <div className="guests">
              <div className="adult">
                <label htmlFor="adult">Adults</label>
                <input type="text" id='adult' className='in2' placeholder='Age 13 or above' disabled />

                <div className='buttons'>
                  <button onClick={() => (adult >0) ? setAdult(adult - 1): setAdult(0)}>-</button>
                  <span>{adult}</span>
                  <button onClick={() => setAdult(adult + 1)}>+</button>
                </div>
              </div>

              <div className="children">
                <label htmlFor="children">Children</label>
                <input type="text" id='children' className='in2' placeholder='Age 2-12' disabled />

                <div className='buttons'>
                  <button onClick={() => (childrens >0) ? setChildrens(childrens - 1): setChildrens(0)}>-</button>
                  <span>{childrens}</span>
                  <button onClick={() => setChildrens(childrens + 1)}>+</button>
                </div>
              </div>
            </div>}
        </div>

        <div className="activeSearch">
          <button onClick={searchStays}><img className='iconSearch' src={icon2} alt="search" />Search</button>
        </div>
      </nav >)


  )
}
