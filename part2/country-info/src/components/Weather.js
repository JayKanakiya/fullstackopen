import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [weather, setWeather] = useState('')
    useEffect(()=>{
        axios.get('http://api.apixu.com/v1/current.json?key=83af9e77f36340ccac153855182706&q=${capital}')
            .then(response=>{
                setWeather(response.data)
            })
    },[])

    if ( ! weather ) {
		return (
			<div></div>
		)
	}

	return (
		<div>
			<p><strong>temperature</strong> {weather.current.temp_c} Celsius<br />
			<img src={weather.current.condition.icon} alt={weather.current.condition.text}/></p>
			<p><strong>wind</strong> {weather.current.wind_kph} km/h, direction {weather.current.wind_dir}  </p>
		</div>		
	)
}

export default Weather
