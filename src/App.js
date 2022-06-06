import React, { Component } from 'react';
import Weather from './components/Weather'
import Form from './components/Form'


const API_KEY = "cc8c1d296c6a3d4bdb34d958a69fef20"
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {


  state = {
    tempreature: '',
    city: '',
    country: '',
    humuiity: '',
    description: '',
    error: ''

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;


    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json()

    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humuiity: data.humuiity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        tempreature: '',
        city: '',
        country: '',
        humuiity: '',
        description: '',
        error: 'Please enter data'
      })


    }
  }




  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather} />


          <Weather

            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humuiity={this.state.humuiity}
            description={this.state.description}
            error={this.state.error}


          />
        </div>

      </div>
    )
  }

}

export default App;
