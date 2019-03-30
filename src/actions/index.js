import * as types from '../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteCartItem = (product) => {
    return {
        type: types.DELETE_CART_ITEM,
        product
    }
}

export const actChangeCartItemQuantity = (product, quantity) => {
    return {
        type: types.CHANGE_CART_ITEM_QUANTITY,
        product,
        quantity
    }
}
