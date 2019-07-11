import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
    const [country, setCountry] = useState([])
    const [filter, setFilter] = useState('')
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all').then(response=>{
            setCountry(response.data)
            console.log(response.data[0])
        })
    },[])
    const handleChange = (event) => {
        setFilter(event.target.value)
        // console.log(country);
    }
    const buttonClick = (event) => {
        setFilter(event.target.attributes.country.value)
    }
    return (
        <div>
            <input
                onChange={handleChange}
                value={filter}
                
            />
            <div>
                <Country countries={country} filter={filter} buttonClick={buttonClick} />
            </div>
        </div>
    )
}

export default App