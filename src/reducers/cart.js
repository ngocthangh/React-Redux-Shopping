import * as types from '../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'https://images-na.ssl-images-amazon.com/images/I/418fDVeBfKL._SY445_.jpg',
            description: 'Sản phẩm do Samsung sản xuất',
            price: 400,
            inventory: 15,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'Galaxy S7 Edge',
            image: 'https://cdn.tgdd.vn/Products/Images/42/75180/samsung-galaxy-s7-edge-blue-coral-edition-400x460-400x460.png',
            description: 'Sản phẩm do Samsung sản xuất',
            price: 200,
            inventory: 150,
            rating: 5
        },
        quantity: 3
    }
];

const cart = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];
    }
}

export default cart;