// // actions.js

// export const addToCart = (product) => ({
//     type: "ADD_TO_CART",
//     payload: product,
// });

// // You can add more actions as needed

// actions.js

export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: product,
});

export const updateQuantity = (productId, quantity) => ({
    type: "UPDATE_QUANTITY",
    payload: { productId, quantity },
});
