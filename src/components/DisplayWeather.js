import React, { Component } from "react";

export class DisplayWeather extends Component {
  render() {
    return (
      <div>
        <div className="" key={this.props.id}>
          <div className=" row justify-content-center">
            <div className="col-12 col-md-6 col-sm-12 col-xs-12">
              <div className=" card p-3" style={{background: '#CEF7DC'}}>
                <div className="">
                  <h4 className="">{this.props.name} </h4>
                  <div>
                    <img src={this.props.imgUrl} width="100px" alt="" />
                  </div>
                </div>
                <div >
                  <h1 className="mb-0 font-weight-bold" id="heading">
                    {this.props.temp} <small className="small grey">C°</small>
                  </h1>
                  <h3>{this.props.description}</h3>
                </div>
                <div className="d-flex">
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
                      {" "}
                      <i
                        className="fa fa-tint mr-2"
                        aria-hidden="true"
                      ></i>{" "}
                      <h6>H {this.props.humidity} % </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayWeather;
