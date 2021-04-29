import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Weather from "./components/Weather";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsDisplay from "./components/NewsDisplay";
import React from "react";

const API_KEY = "c7a2cdf846e14c476ef7581681ffb56e";

class App extends React.Component {
  state = {
    country: "brazil",
    coord: { lat: "", lng: "" },
    cities: "",
    city: "",
    news: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        ` https://newsapi.org/v2/everything?q=(bar OR restaurante OR comida)+melhores+lugares+comer+${this.state.city}&apiKey=197d4650e19949b2890933226983e9ed`
      );
      console.log(response.data.articles);
      this.setState({ news: [...response.data.articles] });
    } catch (err) {
      console.log(err);
    }
  };

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
        `https://api.openweathermap.org/data/2.5/find?lat=${this.state.coord.lat}&lon=${this.state.coord.lng}&cnt=10&units=metric&appid=${API_KEY}`
      );
      this.setState({ cities: [...response2.data.list] });
      console.log(this.state.cities);

      const response3 = await axios.get(
        ` https://newsapi.org/v2/everything?q=(bar OR restaurante OR comida)+melhores+lugares+comer+${this.state.city}&apiKey=197d4650e19949b2890933226983e9ed`
      );

      this.setState({ news: [...response3.data.articles] });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Route path="/" component={Footer} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/weather"
          render={(props) => (
            <Weather
              {...props}
              state={this.state}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          exact
          path="/news"
          render={(props) => (
            <NewsDisplay
              {...props}
              state={this.state}
              handleChange={this.handleChange}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
