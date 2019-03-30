import * as Type from '../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    switch(action.type){
        case Type.ADD_TO_CART:
            let {product, quantity} = action;
            console.log(action);
            let index = findProductInCart(state, product);
            console.log(`Find index - ${index}`)
            if(index >= 0){
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        case Type.DELETE_CART_ITEM:
            product = action.product;
            console.log(action);
            index = findProductInCart(state, product)
            if(index >= 0){
                state.splice(index, 1);
                localStorage.setItem('CART', JSON.stringify(state))
                return [...state]
            }
            break;
        case Type.CHANGE_CART_ITEM_QUANTITY:
            product = action.product;
            quantity = action.quantity;
            index = findProductInCart(state, product)
            if(index >= 0 && state[index].quantity + quantity > 0){
                state[index].quantity += quantity;
                localStorage.setItem('CART', JSON.stringify(state))
                return [...state]
            }
            return [...state]
        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    if(cart.length > 0) {
        for(let i in cart){
            if(cart[i].product.id === product.id){
                return i;
            }
        }
    }
    return -1;
}

export default cart;