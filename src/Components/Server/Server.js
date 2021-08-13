import React, { Component } from "react";

export default class Server extends Component {
  render() {
    const { image, price } = this.props;
    return (
      <div
        className="block"
        style={{
          width: "300px",
        }}
      >
        <img src={image} style={{ width: "100%" }} />
        <strong>{price}</strong>
      </div>
    );
  }
}
