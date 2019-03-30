import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    var {item} = this.props
    return (
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{item.quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    onClick={() => this.updateCartItemQuantity(item, -1)}>
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={() => this.updateCartItemQuantity(item, 1)}>
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{item.product.price * item.quantity}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item"
                    onClick={() => this.handleDeleteCartItem(item)}>
                    X
                </button>
            </td>
        </tr>
                                
    );
  }
  handleDeleteCartItem(item){
    this.props.onDeleteCartItem(item.product);
  }
  updateCartItemQuantity = (item, quantity) => {
      this.props.onChangeCartItemQuantity(item.product, quantity);
  }
}

export default CartItem;
