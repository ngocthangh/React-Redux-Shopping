import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import * as Messages from '../constants/Message'
import CartResult from '../components/CartResult'

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
            result.push(<CartItem key={index} item={item} />)
        })
        if(cart.length > 0){
            result.push(<CartResult key={cart.length} total={total}/>);
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
    ).isRequired
}

const mapStateToAProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToAProps, null)(CartContainer);
