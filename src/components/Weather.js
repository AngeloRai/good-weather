import React, { Component } from "react";
import axios from "axios";

import MapContainer from "./MapContainer";
import DisplayWeather from "./DisplayWeather";
import Input from "./Input";
//import GooglePlaces from './GooglePlaces'
const API_KEY = "c7a2cdf846e14c476ef7581681ffb56e";

export class Weather extends Component {
  state = {
    country: "brazil",
    city: "",
    coord: { lat: "", lng: "" },
    cities: "",
    locations: "",
    layers: "",
  };

  // getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.showPosition);
  //   } else {
  //     return "Geolocation is not supported by this browser.";
  //   }
  // };

  // showPosition = (position) => {
  //   let lat = position.coords.latitude;
  //   let lon = position.coords.longitude;
  //   this.setState({ coord: { lat: lat, lng: lon } });
  // };

  // componentDidMount = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-22.5050000,-43.1786100&radius=5500&type=restaurant&keyword=cruise&key=AIzaSyBCyuVoz1hvTxlfTFHincrJ_h1hRSooks4`
  //     );
  //     console.log(response.data);
  //     this.setState({ locations: response.data });

  //     const response3 = await axios.get(
  //       `http://maps.openweathermap.org/maps/2.0/weather/TA2/10/${this.state.coord.lat}/${this.state.coord.lng}?date=&opacity=0.9&fill_bound=true&appid=${API_KEY}`
  //     );
  //     this.setState({ layers: [...response3.data] });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
 
  componentDidUpdate = async (prevProps, prevStates) => {
    if (prevStates.city !== this.state.city) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&appid=${API_KEY}`
      );
      this.setState({
        coord: {
          lat: response.data.coord.lat,
          lng: response.data.coord.lon,
        },
      });

      const response2 = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?lat=${this.state.coord.lat}&lon=${this.state.coord.lng}&cnt=15&units=metric&appid=${API_KEY}`
      );
      this.setState({ cities: [...response2.data.list] });
      console.log(this.state.cities);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="mt-5" style={{ opcaity: ".3" }}>
        <Input
          country={this.state.country}
          city={this.state.city}
          handleChange={this.handleChange}
        />

        {this.state.cities &&
          this.state.cities.map((city) => {
            return (
              <div key={city.id} className="">
                <div className="ml-2 mt-2">
                  <MapContainer
                    mapCenter={{ lat: city.coord.lat, lng: city.coord.lon }}
                  />
                </div>
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
            );
          })}
      </div>
    );
  }
}

export default Weather;

// key 1 AIzaSyC4LfW4MmJgThlKn3thdzCqzh3VnphitIs
// key 2 AIzaSyBCyuVoz1hvTxlfTFHincrJ_h1hRSooks4
