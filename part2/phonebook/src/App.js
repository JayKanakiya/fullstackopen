import React, { useState } from 'react'

const Persons = (props) => {
	const disp = () => props.persons.map(person=>
			<li key={person.name}> {person.name}</li>
	)
	return (

		<ul>{disp()}</ul>
	)

}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  const addName = (event) => {
	  event.preventDefault()
	//   console.log(event.target)
	  const obj = {
		  name: newName,
	  }
	  setPersons(persons.concat(obj))
	  setNewName(' ')
  }
  const handleChange = (event) => {
	//   console.log(event.target.value)
	  setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
		  name: <input
			 value={newName}
			 onChange={handleChange} 
		  />
        </div>
		
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App