import WeekCard from './WeekCard.jsx'
import AreaChart from './AreaChart.jsx'
import { useState, useEffect } from 'react'

export default function Main({ data, locationInfo }) {
  const [currentTime, setCurrentTime] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString(undefined, { timeZone: locationInfo.tzId })
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [locationInfo.tzId])

  const iconList = {
    Thunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
    Drizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
    Rain: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
    Snow: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
    Fog: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
    Clear: [800],
    Clouds: [801, 802, 803, 804]
  }

  const iconUrls = {
    Thunderstorm: "/src/assets/storm.png",
    Drizzle: "/src/assets/drizzle.png",
    Rain: "/src/assets/rainy.png",
    Snow: "/src/assets/snow.png",
    Fog: "/src/assets/fog.png",
    Clear: "/src/assets/sun.png",
    Clouds: "/src/assets/clouds.png"
  }

  const currentCondition = Object.keys(iconList).find(key =>
    iconList[key].includes(data.current.weather[0].id)
  )

  const imageUrl = iconUrls[currentCondition]

  const weeklyCondition = data.daily.map(index =>
    Object.keys(iconList).find(key =>
      iconList[key].includes(index.weather[0].id)
    )
  )

  const weeklyImageUrls = weeklyCondition.map(
    condition => iconUrls[condition]
  )

  const hourlyForecast = data.hourly.map((hourly, index) => ({
    hour:
      (locationInfo.time + index > 24
        ? locationInfo.time + index - 24
        : locationInfo.time + index) + ":00",
    temp: Math.trunc(hourly.temp)
  }))

  const next18Hours = hourlyForecast.filter((_, i) => i % 3 === 0).slice(0, 6)

  const daysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const dayIndex = locationInfo.date - 1

  const next6Days = Array.from({ length: 6 }, (_, i) =>
    daysShort[(dayIndex + 1 + i) % 7]
  )

  const weekCards = data.daily
    .flatMap((index, i) => ({
      highest: Math.trunc(index.temp.max),
      lowest: Math.trunc(index.temp.min),
      day: next6Days[i],
      img: weeklyImageUrls[i]
    }))
    .slice(0, 6)

  return (
    <div className="main-grid">
      <div>
        <div role="timer" aria-live="off">
             {currentTime}
        </div>

        <hr />
        <section className="current-weather">
          <div>
            <img className="current-weather-img" src={imageUrl} alt= {`${data.current.weather[0].main} icon`} />
          </div>
          <div>
            <h2>{locationInfo.location}</h2>
            <h2>{data.current.temp}</h2>
            <h3>{data.current.weather[0].main}</h3>
          </div>

          <section className="weather-detail" >
            <div className="weather-detail-part">
              <img src="/src/assets/icons8-wind-100.png" alt="wind speed per km icon" />
              <h4>{data.current.wind_speed} kph</h4>
            </div>
            <div className="weather-detail-part">
              <img src="/src/assets/icons8-humidity-96.png" alt="humidity percantage icon" />
              <h4>{data.current.humidity} %</h4>
            </div>
          </section>
        </section>

        <hr />

        <section className="area-chart">
          <h3>Next couple hours:</h3>
          <AreaChart next18Hours={next18Hours} />
        </section>

        <hr />

        <section className="card-container">
          <div>
            <h3>Next couple days:</h3>
          </div>
          <div className="card">
            {weekCards.map(({ day, highest, lowest, img }, i) => (
              <WeekCard
                key={i}
                day={day}
                highest={highest}
                lowest={lowest}
                img={img}
              />
            ))}
          </div>
        </section>

        <hr />
      </div>
    </div>
  )
}
