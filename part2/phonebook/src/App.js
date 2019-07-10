import React, { useState } from 'react'

const Persons = (props) => {
	var filteredNames = props.persons
	if(props.showResults){
		filteredNames = props.persons.filter(person => person.name.toLowerCase().includes(props.showResults.toLowerCase()))
	}
	const disp = () => filteredNames.map(person=>
			<li key={person.name}> {person.name} {person.number}</li>
	)
	return (

		<ul>{disp()}</ul>
	)

}

const App = () => {
  const [ persons, setPersons] = useState([
	{ name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNumber] = useState('')
  const [showResults, setResults] = useState('')
 
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
  const filterChange = (event) => {
	  setResults(event.target.value)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
	  <div>
		  filter shown with <input
			value={showResults}
			onChange = {filterChange}
		  />
	  </div>
	  <h2>add a new </h2>
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
      <Persons persons={persons} showResults={showResults} />
    </div>
  )
}

export default App