import React, { Component } from "react";
import axios from "axios";

// key 1 AIzaSyC4LfW4MmJgThlKn3thdzCqzh3VnphitIs
// key 2 AIzaSyBCyuVoz1hvTxlfTFHincrJ_h1hRSooks4
import MapContainer from './MapContainer'
import DisplayWeather from "./DisplayWeather";
import Input from "./Input";
const API_KEY = "c7a2cdf846e14c476ef7581681ffb56e";

export class Weather extends Component {
  state = {
    country: "brazil",
    city: "",
    lat: "",
    lon: "",
    cities: "",
    locations: ''
  };

  componentDidMount = async () => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-22.9055600,-47.0608300&radius=5500&type=restaurant&keyword=cruise&key=AIzaSyBCyuVoz1hvTxlfTFHincrJ_h1hRSooks4`
    );
    console.log(response.data);
    this.setState({locations: response.data});
  }


  componentDidUpdate = async (prevProps, prevStates) => {
    if (prevStates.city !== this.state.city) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${API_KEY}`
      );
      this.setState({
        lon: response.data.coord.lon,
        lat: response.data.coord.lat,
      });

      const response2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?lat=${this.state.lat}&lon=${this.state.lon}&cnt=15&units=metric&appid=${API_KEY}`
      );
      this.setState({ cities: [...response2.data.list] });
      console.log(this.state.cities);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log('locations' + this.state.locations);
    return (
      <div className="mt-5">
        <Input
          getCities={this.getCities}
          country={this.state.country}
          city={this.state.city}
          handleChange={this.handleChange}
        />

        {this.state.cities &&
          this.state.cities.map((city) => {
            return (
              <div key={city.id} className=''>
                <DisplayWeather
                  id={city.id}
                  name={city.name}
                  temp={city.main.temp}
                  description={city.weather[0].description}
                  windSpeed={city.wind.speed}
                  humidity={city.main.humidity}
                  imgUrl={`http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
                />
                <MapContainer/>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Weather;
