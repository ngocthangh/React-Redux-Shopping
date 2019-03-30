import React, { Component } from 'react';
import Products from '../components/Products';
import { connect } from 'react-redux';
import Product from '../components/Product';
import { PropTypes } from 'prop-types'

class ProductContainer extends Component {
    render() {
        var { products } = this.props
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products){
        var result = null;
        if(products.length > 0){
            console.log(products.length)
            result = products.map((product, index)=>{
                return <Product key={index} product={product}/>
            });
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
}

const mapStateToProps = state =>{
    return {
    }
}

export default connect(mapStateToProps, null)(ProductContainer);
