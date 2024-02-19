// ShoppingPage.js

import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

function ShoppingPage() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newProduct) => {
        // Append the new product to the existing items in the cart
        setCartItems([...cartItems, newProduct]);
    };

    return (
        <div>
            <Products addToCart={addToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
}

export default ShoppingPage;
