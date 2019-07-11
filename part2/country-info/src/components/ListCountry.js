import React from 'react'
import Country from './Country'
const ListCountry = (props) => {
    if(props.filteredCountries.length > 10){
        return (
            <p>Too many matches, soecify another filter</p>
        )
    }
    else{
        return (
            <Country countries={props.countries} filter={props.filter} />
        )
    }
}