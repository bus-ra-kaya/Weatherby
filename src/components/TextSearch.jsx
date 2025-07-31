import React from 'react'
import LoadingScreen from './LoadingScreen';


export default function TextSearch (props) {

   const [city, setCity] = React.useState("")

  	function searchCity (event) {
       props.cityToggle()
		event.preventDefault()
		fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
		.then(res => res.json())
		.then(data => {
			props.setCoordinates({lat: data[0].lat, lng: data[0].lon})
			
		})
		.catch(err => console.error("Geocoding error:", err));

	}

  return(
    <>
        <form id="loadByCity" onSubmit={searchCity}>
          <input 
            className="city-search" 
            type="text" 
            placeholder="Enter a city name"
            onChange= {(event) => {setCity(event.target.value)}}
            value= {city} 
					/>
          <button type="submit" className="submit" >Search</button>
        </form>
    </>
      

  )
}