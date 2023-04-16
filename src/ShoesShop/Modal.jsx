import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const {content} = this.props;
    console.log(content);
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thông tin sản phẩm
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Alias</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>shortDescription</th>
                      <th>Quality</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{content.id}</td>
                      <td>{content.name}</td>
                      <td>{content.alias}</td>
                      <td>{content.price}$</td>
                      <td>{content.description}</td>
                      <td>{content.shortDescription}</td>
                      <td>{content.quantity}</td>
                      <td>
                        <img
                          className="w-25"
                          src={content.image}
                          alt="..."
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
