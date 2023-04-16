import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item , handleShowDentail} = this.props;
    // console.log(setStateModal);
    return (
      <div>
        <div className="card mt-3">
          <img
            src={item.image}
            alt="..."
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleShowDentail}
          />
          <div
            className="card-body"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleShowDentail}
          >
            <h5>{item.name}</h5>
            <h2>{item.price}$</h2>
          </div>
          <button className="btn btn-dark">
            Add to card
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
