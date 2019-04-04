import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      weatherData: []
    }
  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=cologne,de&APPID=${
        process.env.REACT_APP_OWM_API_KEY
      }`
    ).then(res => {
      if (res.status !== 200) {
        console.error('Request failed')
        console.error(res)
        return
      }
      res.json().then(function(data) {
        console.log(data)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.loading && <div>Loading</div>}
          {!this.state.loading && (
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          )}
        </header>
      </div>
    )
  }
}

export default App
