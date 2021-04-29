import React, { Component } from "react";

import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";
import DisplayWeather from "./DisplayWeather";
import Input from "./Input";
import News from "./News";
import sunImage from "../sun-sunglasses-5a.png";

//import GooglePlaces from './GooglePlaces'


export class Weather extends Component {
 

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





  render() {
    return (
      <div
        className="mt-5 d-flex-column align-content-between"
        style={{ opcaity: ".3" }}
      >
        <Link to={`/weather`} style={{ textDecoration: "none" }}>
          <div className="fixed-top w-50 my-5">
            <img className="w-25" src={sunImage} alt="" />
          </div>
        </Link>
        <Input
          country={this.props.state.country}
          city={this.props.state.city}
          handleChange={this.props.handleChange}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              {this.props.state.cities &&
                this.props.state.cities.map((city) => {
                  return (
                    <div key={city.id} className="row">
                     
                      <div className="col-5 p-2">
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
                      <div className="col-7 mt-1">
                        <MapContainer
                          mapCenter={{
                            lat: city.coord.lat,
                            lng: city.coord.lon,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-4">
              {this.props.state.news &&
                this.props.state.news.map((news) => {
                  return (
                    <div className="mb-5" key={news.title}>
                      <News
                        urlToImage={news.urlToImage}
                        title={news.title}
                        url={news.url}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;

// key 1 AIzaSyC4LfW4MmJgThlKn3thdzCqzh3VnphitIs
// key 2 AIzaSyBCyuVoz1hvTxlfTFHincrJ_h1hRSooks4
