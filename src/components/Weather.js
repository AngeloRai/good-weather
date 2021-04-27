import React, { Component } from "react";
import axios from "axios";

import DisplayWeather from "./DisplayWeather";
import Input from "./Input";
const API_KEY = "c7a2cdf846e14c476ef7581681ffb56e";
//const ACCU_API_KEY ="MUupA3Htn9lMGeIQabkAbKI1OMopis7c"
// lqTskqLo3b1LKzDtqs5wgTyX9p7yDhNM
export class Weather extends Component {
  state = {
    data: "",
    country: "brazil",
    city: "sao paulo",
    name: "",
    temp: "",
    description: "",
    windSpeed: "",
    humidity: "",
    imgUrl: "",
    lat: "",
    lon: "",
    cities: "",
    box: [],
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      return "Geolocation is not supported by this browser.";
    }
  };

  showPosition = (position) => {
    let lat = position.coords.latitude.toFixed(2);
    let lon = position.coords.longitude.toFixed(2);
    this.setState({
      lat: lat,
      lon: lon,
    });
  };

  componentDidMount = async () => {
    this.getLocation();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${API_KEY}`
      
    );
    console.log(response.data);
    this.setState({
      name: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
    });
    console.log("lat " + this.state.lat);
  };

  getCities = async (e) => {
    e.preventDefault();
    
    console.log( this.state.lat);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${API_KEY}`
    );
    const response1 = await axios.get(
      `https://api.openweathermap.org/data/2.5/find?lat=${this.state.lat}&lon=${this.state.lon}&cnt=50&units=metric&appid=${API_KEY}`
      //`https://api.openweathermap.org/data/2.5/box/city?bbox=11,30,15,37,10&appid=${API_KEY}`
    );

    this.setState({
      name: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
      cities: [...response1.data.list],
    });

    console.log(response.data);
    console.log(this.state.cities);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  

  render() {
    return (
      <div className="mt-5">
        <Input
          getCities={this.getCities}
          country={this.state.country}
          city={this.state.city}
          handleChange={this.handleChange}
        />

        <DisplayWeather
          
          name={this.state.name}
          temp={this.state.temp}
          description={this.state.description}
          windSpeed={this.state.windSpeed}
          humidity={this.state.humidity}
          imgUrl={this.state.imgUrl}
        />
      
      {this.state.cities && this.state.cities.map(city => {
        return (
          <div key={city.id}>
            <DisplayWeather
            id={city.id}
            name={city.name}
            temp={city.main.temp}
            description={city.weather[0].description}
            windSpeed={city.wind.speed}
            humidity={city.main.humidity}
            imgUrl={`http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
          />
          </div>
        )
      })}
       
      </div>

    );
  }
}

export default Weather;
