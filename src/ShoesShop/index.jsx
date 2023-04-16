import React, { Component } from "react";
import ProductList from "./ProductList";

export default class ShoesShop extends Component {
  state = {
    productDentail: {},
  };
  products = [];
  render() {
    return (
      <div>
        <ProductList productsData={this.products} setStateModal={this.state} />
      </div>
    );
  }
}
