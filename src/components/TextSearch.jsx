import React from 'react'


export default function TextSearch (props) {

   const [city, setCity] = React.useState("")

  	function searchCity (event) {

      if(city !== "")
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
          <label htmlFor="city-input" id="city-label">Search for a city: </label>
          <input 
            className="city-search" 
            type="text" 
            placeholder="Istanbul"
            onChange= {(event) => {setCity(event.target.value)}}
            aria-describedby="city-label"
            value= {city} 
					/>
          <button type="submit" className="submit" aria-label="Submit city selection">Search</button>
        </form>
    </>
      

  )
}