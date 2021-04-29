import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import sunImage from "../sun-sunglasses-5a.png";

export class NewsDisplay extends Component {
  state = {
    news: [],
};

  componentDidMount = async () => {
    
      const response = await axios.get(
        ` https://newsapi.org/v2/everything?q=(bar OR restaurante OR comida)+melhores+lugares+comer+${this.props.state.city}&apiKey=197d4650e19949b2890933226983e9ed`
      );
      console.log(response.data.articles);
      this.setState({ news: [...response.data.articles] });
   
  };

  componentDidUpdate = async (prevProps, prevStates) => {
    if(prevStates.news === this.state.news){
      const response = await axios.get(
        ` https://newsapi.org/v2/everything?q=(bar OR restaurante OR comida)+melhores+lugares+comer+${this.props.state.city}&apiKey=197d4650e19949b2890933226983e9ed`
      );
      this.setState({ news: [...response.data.articles] });
      console.log(this.state.news);
      console.log('hello');
    }
  };

  render() {
      
    return (
      <div className='mt-5' style={{margin: '50px'}}>
        <Link to={`/weather`} style={{ textDecoration: "none" }}>
          <div className="fixed-top w-50 m-5">
            <img className="w-25" src={sunImage} alt="" />
          </div>
        </Link>
        <div className='m-5' style={{margin: '50px'}}>
          {this.state.news &&
            this.state.news.map((news) => {
              return (
                  <div className="card w-75 my-2" style={{ width: "18rem" }} key={news.title}>
                    <img
                      className="card-img-top"
                      src={news.urlToImage}
                      alt="News"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{news.title}</h5>
                      <p className="card-text">{news.description}{news.content}</p>
                      <a href={news.url} className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default NewsDisplay;
