import React from 'react'
import {GoogleMap,useJsApiLoader} from '@react-google-maps/api'


export default function GoogleMaps (props) {
  const containerStyle = {
  width: "100%",
  height: "500px"
  }

  const {isLoaded} = useJsApiLoader ({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  })

  const [center,setCenter] = React.useState({
    lat: 38.9573,
    lng: 35.2407

  })

  function mapClick(e) {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    const coordinates = {lat,lng}
    props.setCoordinates(coordinates)
    props.cityToggle()
    setCenter({lat,lng})

  }


  return isLoaded ? (
    <div className="map-container">
      <GoogleMap  mapContainerStyle = {containerStyle} center = {center} zoom = {6}
      onClick ={mapClick}  
      options = {{
        disableDefaultUI: true, 
        draggable: true,       
        scrollwheel: true, 
        disableDoubleClickZoom: false,
        keyboardShortcuts: false,
        clickableIcons: false, 
      }}

  > 
      </GoogleMap> 
    </div> 
    ): null
}