import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import Server from "./Components/Server/Server";
import axios from "axios";
import Logo from "./images/cart.png";
import "./App.scss";
import Cart1 from "./images/Green.jpg";
import Cart2 from "./images/black-shirt.jpg";
import Cart3 from "./images/man-black.webp";
import Cart from "./Components/Cart/Cart";
import Local from "./Components/Main/Local";
import About from "./Components/About";
import { Redirect, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    console.log("app constructor");
    super();
    this.state = {
      product: [
        { name: "Product-1", img: Cart1, id: 0, price: 23 },
        { name: "Product-2", img: Cart2, id: 1, price: 30 },
        { name: "Product-3", img: Cart3, id: 2, price: 13 },
      ],
      productUrl: [],

      showModal: false,
      cartItems: [],
    };
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const data = res.data;
      this.setState(({ productUrl }) => {
        return {
          productUrl: data,
        };
      });
    });
  }

  addProductCartItem = (cart) => {
    this.setState(({ cartItems, showModal }) => {
      console.log(cartItems, "foo");

      const newCartItems = [...cartItems, cart];
      return {
        cartItems: newCartItems,
      };
    });
  };

  clickOpenModalCartComponent = () => {
    this.setState(({ showModal }) => {
      return {
        showModal: !showModal,
      };
    });
  };

  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    const { cartItems, showModal, sum, productUrl } = this.state;
    console.log(productUrl);
    return (
      <div>
        <Header
          icon={Logo}
          clickOpenModalCartComponent={this.clickOpenModalCartComponent}
        />

        <Route path={"/"} exact render={() => <h1>Home Page</h1>} />
        <Route
          path={"/local"}
          render={() => (
            <Fragment>
              <section className="elem">
                {this.state.product.map((item) => {
                  return (
                    <Local
                      {...item}
                      addProductCartItem={({ match, history }) =>
                        this.addProductCartItem(item)
                      }
                    />
                  );
                })}
              </section>
              <About />
            </Fragment>
          )}
        />
        <Cart showModal={showModal} cart={cartItems} />
        <Route path={"/local/:name"} render={() => <h1>element</h1>} />
        <Route path={"/server"}>
          <section className="server">
            {productUrl.map((urlItems) => {
              return <Server {...urlItems} />;
            })}
          </section>
        </Route>

        <Route exact path={"/about"} render={() => <About />} />
        <Redirect to="/server" />
      </div>
    );
  }
}

export default App;
