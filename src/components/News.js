import React from "react";

class News extends React.Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={this.props.urlToImage}
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text"></p>
            <a href={this.props.url} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
