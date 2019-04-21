import React, { useState } from 'react'
import LocationInput from './LocationInput'

function App() {
  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(undefined)

  function getCurrentWeatherData(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
        process.env.REACT_APP_OWM_API_KEY
      }`
    ).then(res => {
      if (res.status !== 200) {
        console.error('Request failed')
        console.error(res)
        return
      }
      res
        .json()
        .then(function(data) {
          console.log('Request successful')
          console.log(data)
          return data
        })
        .then(res => {
          console.log(res)
          setWeatherData(res)
          setLoading(false)
        })
    })
  }

  function handleLocationSubmit(location) {
    setLocation(location)
    getCurrentWeatherData(location)
  }

  return (
    <React.Fragment>
      <LocationInput onSubmit={handleLocationSubmit} />
      <div>Chosen Location: {location || 'none yet'}</div>
      {loading && <div>Loading</div>}
      {!loading && <p>{JSON.stringify(weatherData)}</p>}
    </React.Fragment>
  )
}

export default App
