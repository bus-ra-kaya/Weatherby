## Weatherby

A minimalistic weather app for keeping track of time and forecast information with a simple interface

Note:  The app uses data from OpenWeatherMap and the data may differ from other weather forecasts

## Screenshots
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/e8e4ff5c-61ab-48f2-aafa-dff4496c28da" />
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/8676350d-a053-472e-81bb-4cb0d1519c9f" />

## Features

* Search any city or select a location via interactive map
* Live location time updates for selected location
* Dynamic weather data pulled from OpenWeather


## API Notes

This app uses:
- **OpenWeather One Call API 3.0** – 1,000 free calls/day (requires billing setup)
- **WeatherAPI** – Free tier available with location and forecast data
- **Google Maps JavaScript API** – $200/month free usage (billing required)

You’ll need to sign up for each service and add your API keys to a `.env` file like shown below

## Getting Started

* Clone the repo
```git clone https://github.com/bus-ra-kaya/Weatherby.git```
```cd weatherApp```

* Install dependencies
```npm install```

* Add your API keys in a .env file like:

```VITE_WEATHER_API_KEY=your_openweather_api_key```
```VITE_LOCATION_API_KEY=your_weatherapi_key```
```VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key```

* Start the server
```npm run dev```

## Improvements To Be Made
* Handling API call fails
* Adding a state management library for less clutter

## Credits:
* Icons from [icons8.com](https://icons8.com/)
* Background image from [Unsplash](https://unsplash.com/photos/silhouette-of-trees-during-daytime-QRBe3Ithczs)

## License:
MIT License
