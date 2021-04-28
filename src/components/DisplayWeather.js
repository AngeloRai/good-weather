import React, { Component } from "react";

export class DisplayWeather extends Component {
  render() {
    return (
      <div className="col-4 m-2" key={this.props.id}>
        <div
          className="card p-4"
          style={{ background: "#CEF7DC" }}
        >
          <div className="">
            <h4 className="d-flex justify-content-center">
              {this.props.name}{" "}
            </h4>
            <div className="d-flex justify-content-center">
              <img src={this.props.imgUrl} width="100px" alt="" />
            </div>
          </div>
          <div>
            <h1
              className="d-flex justify-content-center mb-0 font-weight-bold"
              id="heading"
            >
              {this.props.temp} <small className="small grey">C°</small>
            </h1>
            <h3 className="d-flex justify-content-center">
              {this.props.description}
            </h3>
          </div>

          <div className="temp-details flex-grow-1">
            <div className="d-flex justify-content-center my-1">
              <img
                className="mx-2"
                src="https://i.imgur.com/B9kqOzp.png"
                height="23px"
                alt=""
              />
              <h6> {this.props.windSpeed} km/h </h6>
            </div>
            <div className="my-1">
              <h6 className="d-flex justify-content-center">
                H {this.props.humidity} %{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayWeather;
