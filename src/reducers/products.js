var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://images-na.ssl-images-amazon.com/images/I/418fDVeBfKL._SY445_.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 4
    },
    {
        id: 2,
        name: 'Oppo F1s',
        image: 'https://img2.gadgetsnow.com/gd/images/products/additional/original/G24153_View_3/mobiles/smartphones/oppo-f1s-grey-64gb-4gb-ram-.jpg',
        description: 'Sản phẩm do China sản xuất',
        price: 450,
        inventory: 5,
        rating: 3
    },
    {
        id: 3,
        name: 'Galaxy S7 Edge',
        image: 'https://cdn.tgdd.vn/Products/Images/42/75180/samsung-galaxy-s7-edge-blue-coral-edition-400x460-400x460.png',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 200,
        inventory: 150,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;