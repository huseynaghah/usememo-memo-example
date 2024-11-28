import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { people } from './data/data'
import Counter from './components/Counter'

function App() {
  const [userID, setUserID] = useState(null);

  const calculateAge = (id) =>{

    console.log("RENDER NAMES");
    
    if (!id) {
      return;
    }
     let selectedPerson =  people.find(person => person.id === id);
     return 2024 - selectedPerson?.birthYear;
  }
 
  let age =  useMemo(() => calculateAge(userID), [userID])
  // let age = calculateAge(userID);

  return (
    <>
    <Counter/>
      <hr />
      <div className="counterWrapper">
        <select onChange={(e) => setUserID(Number(e.target.value))}>
          <option disabled={userID}>Choose one person</option>
          {people.map((person) => (
            <option key={person.id} value={person.id}>{person.name}</option>
          ))}
        </select>
          {userID && <>
            <p>Username : {people.find((person)=> person.id === userID).name}</p>
            <p>Surname : {people.find((person)=> person.id === userID).surname}</p>
            <p>Age : {age}</p>
          </>}
      </div>
    </>
  )
}

export default App
