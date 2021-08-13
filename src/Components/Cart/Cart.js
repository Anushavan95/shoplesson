import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cart, showModal } = this.props;
    return (
      <div className={`cart ${showModal ? "open" : ""}`}>
        {cart.map((items) => {
          return (
            <div>
              <img src={items.img} style={{ width: "60px" }} />
              <strong>{items.price}</strong>
            </div>
          );
        })}
      </div>
    );
  }
}
