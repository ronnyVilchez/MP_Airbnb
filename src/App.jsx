
import './App.css'
import array from './assets/stays.json'
import search from '/images/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import { Cards } from './components/Cards';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Title } from './components/Title';
import { useState } from 'react';

function App() {

  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [location, setLocation] = useState('')
  const [persons, setPersons] = useState(0)
  const [effect, setEffect] = useState(false)
  const [cards, setCards] = useState([array])



  function openLocation() {
    setModal(!modal)
  }
  function openGuests() {
    setModal2(!modal2)
  }

  return (
    <>
      <Header>
        <Nav
          icon={search}
          array={array}
          openLocation={openLocation}
          modal={modal}
          setModal={setModal}
          setLocation={setLocation}
          location={location}
          openGuests={openGuests}
          modal2={modal2}
          setModal2={setModal2}
          persons={persons}
          setPersons={setPersons}
          setEffect={setEffect}
          effect={effect}
        />
      </Header>
      <Title
        cards={cards}
      />
      <Cards
        array={array}
        location={location}
        persons={persons}
        effect={effect}
        cards={cards}
        setCards={setCards}
      />
    </>
  )
}

export default App
