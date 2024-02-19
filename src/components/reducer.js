// // reducers.js

// const initialState = {
//     cart: [],
//     // Add other initial state properties as needed
// };

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload],
//             };
//         // Handle other actions as needed

//         default:
//             return state;
//     }
// };

// export default rootReducer;

// reducers.js

const initialState = {
    cart: [],
    // Add other initial state properties as needed
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // Check if the item is already in the cart
            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id,
            );

            if (existingItemIndex !== -1) {
                // If the item is already in the cart, update the quantity
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex].quantity +=
                    action.payload.quantity;

                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                // If the item is not in the cart, add it
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            }
        case "UPDATE_QUANTITY":
            const { productId, quantity } = action.payload;
            const updatedCart = state.cart.map((item) => {
                if (item.id === productId) {
                    console.log(item.quantity);
                    // Update the quantity for the specified product
                    const newQuantity = Math.max(item.quantity + quantity, 0);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            return {
                ...state,
                cart: updatedCart,
            };

        // Handle other actions as needed

        default:
            return state;
    }
};

export default rootReducer;
