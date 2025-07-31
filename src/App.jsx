import { useState, useEffect } from 'react'
import './App.css'
import ChooseCity from './components/ChooseCity.jsx'
import Main from './components/Main.jsx'

export default function App () {
  const [coordinates, setCoordinates] = useState()
  const [cityLoad, setCityLoad] = useState(false)
  const [weatherdata, setWeatherData] = useState()
  const [locationInfo, setLocationInfo] = useState({})
  const [locationChosen, setLocationChosen] = useState(false)

  useEffect(() => {
    if (coordinates) {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY
      const locationApiKey = import.meta.env.VITE_LOCATION_API_KEY
      const lat = coordinates.lat.toFixed(5)
      const lng = coordinates.lng.toFixed(5)

      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=alerts,minutely&days=7&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data)
          setCityLoad(true)
        })
        .catch(error => {
          console.error('Weather API error:', error)
        })

      fetch(`https://api.weatherapi.com/v1/forecast.json?key=${locationApiKey}&q=${lat},${lng}&alerts=no`)
        .then(res => res.json())
        .then(data => {
          const locationName = (data.location.region !== data.location.name)
            ? `${data.location.region}, ${data.location.name}`
            : data.location.region

          setLocationInfo({
            location: locationName,
            time: new Date(data.location.localtime).getHours(),
            date: new Date(data.location.localtime).getDay(),
            tzId: data.location.tz_id
          })
        })
        .catch(error => {
          console.error('Location API error:', error)
        })
    }
  }, [coordinates, locationChosen])

  return (
    <div className="background-blur">
      <div className="app-container" aria-live="polite">

        {cityLoad
          ? <Main data={weatherdata} locationInfo={locationInfo} />
          : <ChooseCity
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setLocationChosen={setLocationChosen}
              locationChosen={locationChosen}
            />}
      </div>
    </div>
  )
}
