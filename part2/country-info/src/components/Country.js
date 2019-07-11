import React from "react";

const Country = (props) => {
    var filteredCountries = props.countries
    if(props.filter){
        filteredCountries = filteredCountries.filter(country=>country.name.toLowerCase().includes(props.filter.toLowerCase()))
    }
    const disp = () => {
        return filteredCountries.map(country=>
                <li key={country.name}> {country.name} </li>
            )     
    }

    if(filteredCountries.length >10){
        return (
            <p>Too many matches, specify another filter</p>
        )

    }
    
    if(filteredCountries.length===1){
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
    
    return (
        <ul>{disp()}</ul>
    )

}

export default Country