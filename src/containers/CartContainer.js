import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import * as Messages from '../constants/Message'
import CartResult from '../components/CartResult'
import * as actions from '../actions/index'

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        console.log(cart)
        return (
            <Cart>
                {this.showCartItems(cart)}
            </Cart>
        );
    }
    showCartItems(cart) {
        let result = [];
        let total = 0;
        cart.forEach((item, index) => {
            total += item.product.price * item.quantity;
            result.push(<CartItem key={index} item={item} 
                onDeleteCartItem={this.props.onDeleteCartItem}
                onChangeCartItemQuantity={this.props.onChangeCartItemQuantity}/>)
        })
        if(cart.length > 0){
            result.push(<CartResult key={cart.length} total={total}/>);
        } else {
            result = <tr><td>{Messages.MSG_CART_EMPTY}</td></tr>;
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteCartItem: PropTypes.func.isRequired,
    onChangeCartItemQuantity: PropTypes.func.isRequired
}

const mapStateToAProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteCartItem: (product) => {
            dispatch(actions.actDeleteCartItem(product));
            dispatch(actions.actChangeMessage(Messages.MSG_PRODUCT_IN_CART_SUCCESS));
        },
        onChangeCartItemQuantity: (product, quantity) => {
            dispatch(actions.actChangeCartItemQuantity(product, quantity));
            dispatch(actions.actChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS));
        }
    }
}

export default connect(mapStateToAProps, mapDispatchToProps)(CartContainer);
