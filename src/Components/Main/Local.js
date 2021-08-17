import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Local extends Component {
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
  changeUrl = () => {
    this.props.history.push(`/About`);
  };
  render() {
    const { addProductCartItem, img, price, name } = this.props;

    return (
      <div className="items" onClick={this.changeUrl}>
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
export default withRouter(Local);
