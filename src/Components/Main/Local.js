import React, { Component } from "react";

export default class Local extends Component {
  state = {
    nameValue: "Product",
    toggle: false,
  };

  changeValue = (event) => {
    this.setState({
      nameValue: event.target.value,
    });
  };

  // componentWillUpdate(nextState, nextProps) {
  //   console.log("componentWillUpdate", nextState, nextProps);
  // }

  shouldComponentUpdate(nextState, nextProps) {
    console.log("shouldComponentUpdate", nextState, nextProps);
    return false;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    const { addProductCartItem, img, price, name } = this.props;

    return (
      <div className="items">
        <div className="products-item">
          <h2>{this.state.nameValue}</h2>
          <input type="text" onChange={this.changeValue} />

          <h2>{name}</h2>
          <img src={img} />
          <strong>{price}</strong>
          <button onClick={addProductCartItem}>add to cart</button>
        </div>
      </div>
    );
  }
}
