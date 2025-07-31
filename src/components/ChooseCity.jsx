import GoogleMaps from './Maps.jsx'
import LoadingScreen from './LoadingScreen.jsx'
import TextSearch from './TextSearch.jsx'

export default function ChooseCity(props) {
  function cityToggle() {
    setTimeout(() => {
      props.setLocationChosen(true)
    }, 150)
  }

  return (
    props.locationChosen ? (
      <LoadingScreen />
    ) : (
      <section id="search-section">
        <TextSearch cityToggle={cityToggle} setCoordinates={props.setCoordinates} />
        <h4>Or... Click on a random place on the map!</h4>
        <GoogleMaps
          cityToggle={cityToggle}
          coordinates={props.coordinates}
          setCoordinates={props.setCoordinates}
        />
      </section>
    )
  )
}
