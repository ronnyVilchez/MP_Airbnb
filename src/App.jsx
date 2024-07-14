
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
  const [location, setLocation] = useState('')
  const [persons, setPersons] = useState(0)
  const [cards, setCards] = useState([array])

  return (
    <>
      <Header>
        <Nav
          icon={search}
          modal={modal}
          setModal={setModal}
          setLocation={setLocation}
          location={location}
          persons={persons}
          setPersons={setPersons}
        />
      </Header>
      <Title
        cards={cards}
      />
      <Cards
        array={array}
        location={location}
        persons={persons}
        cards={cards}
        setCards={setCards}
      />
    </>
  )
}

export default App
