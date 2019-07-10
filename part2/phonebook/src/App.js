import React, { useState } from 'react'

const Persons = (props) => {
	const disp = () => props.persons.map(person=>
			<li key={person.name}> {person.name} {person.number}</li>
	)
	return (

		<ul>{disp()}</ul>
	)

}

const App = () => {
  const [ persons, setPersons] = useState([
	{ name: 'Arto Hellas',
	   number: '9819984770'
	}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNumber] = useState('')
 
  const addDetails = (event) => {
	  event.preventDefault()
	//   console.log(event.target)
	
		// console.log(persons[1]);

		if(persons.findIndex(person => person.name === newName) > -1){
			alert(newName + ' is already in the phonebook')
		}
		else{
			const obj = {
				name: newName,
				number: newNumber
			}
			// console.log(persons)
			// console.log(obj)		
			setPersons(persons.concat(obj))
			setNewName(' ')
			setNumber(' ')
		}
	
  }
  const handleChange = (event) => {
	//   console.log(event.target.value)
	  setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
	//   console.log(event.target.value)
	  setNumber(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addDetails}>
        <div>
		  name: <input
			 value={newName}
			 onChange={handleChange} 
		  /> <br/>
		  number: <input 
			  value={newNumber}
			  onChange = {handleNumberChange}
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