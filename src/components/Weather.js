import React, { Component } from "react";
import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";
import DisplayWeather from "./DisplayWeather";
import Input from "./Input";
import News from "./News";
import sunImage from "../sun-sunglasses-5a.png";

export class Weather extends Component {
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

// key google new key glo 197d4650e19949b2890933226983e9ed


// google news key 0b3cce36cefb47169db35892214ae9f7