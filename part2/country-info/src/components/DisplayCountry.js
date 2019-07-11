import React from 'react'

const DisplayCountry = ({filteredCountries}) => {
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
            </div>
    )
}

export default DisplayCountry