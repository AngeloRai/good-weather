import React, { Component } from 'react'

export class Input extends Component {
    render() {
        return (
            <div>
                 <form onSubmit={this.props.getCities}>
          <input
            className="m-5"
            type="text"
            name="country"
            value={this.props.country}
            placeholder="country..."
            onChange={this.props.handleChange}
          />
          <input
            type="text"
            name="city"
            value={this.props.city}
            placeholder="city..."
            onChange={this.props.handleChange}
          />
          <button className="m-5">Get Weather</button>
        </form>
            </div>
        )
    }
}

export default Input
