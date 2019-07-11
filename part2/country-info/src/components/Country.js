import React, {useEffect, useState} from "react";
import DisplayCountry from './DisplayCountry'
import axios from 'axios'

const Country = (props) => {

    var filteredCountries = props.countries
    if(props.filter){
        filteredCountries = filteredCountries.filter(country=>country.name.toLowerCase().includes(props.filter.toLowerCase()))
    }
    const disp = () => {
        return filteredCountries.map(country=>
                <>
                <li key={country.name}> {country.name} <button onClick={props.buttonClick} country={country.name}>show</button></li> 
                </>
            )     
    }

    if(filteredCountries.length >10){
        return (
            <p>Too many matches, specify another filter</p>
        )

    }
    
    if(filteredCountries.length===1){
        
         return (
            <DisplayCountry filteredCountries={filteredCountries} />
        )
    }
    
    return (
        <ul>{disp()}</ul>
    )

}

export default Country