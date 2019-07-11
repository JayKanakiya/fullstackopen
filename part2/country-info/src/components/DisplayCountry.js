import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Weather from './Weather'

const DisplayCountry = ({filteredCountries}) => {
    const capital = filteredCountries[0].capital
    
    return (
        <div>
                <h2>{filteredCountries[0].name}</h2>
                <br/>
            
                capital {filteredCountries[0].capital}<br/>
                population {filteredCountries[0].population}
                <br/>
                <h3>languages</h3>
                <ul>
                {
                    filteredCountries[0].languages.map((lang, index)=>{
                        return <li key={index}>{lang.name}</li>
                    })
                    
                }
                
                 </ul>
                 <br/>
                 <img src={filteredCountries[0].flag}  width="150" height="150"/>
                 <h2>Weather in {capital}</h2>
                 <Weather capital={capital}/>

            </div>
    )
}

export default DisplayCountry