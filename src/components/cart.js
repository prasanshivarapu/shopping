// // Cart.js
// version 1
// import { useState } from "react";
// import React from "react";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function Cart(props) {
//     const { cartItems } = props;
//     const [showPopup, setShowPopup] = useState(false);
//     console.log(cartItems);
//     let totalAmount = 0;
//     const handlePlaceOrder = () => {
//         // Add logic for placing the order here
//         // For now, just toggle the showPopup state
//         setShowPopup(!showPopup);
//     };
//     return (
//         <div>
//             <h1>Cart</h1>

//             {/* Render cart items in a table */}
//             <table className="table">
//                 <thead>
//                     <tr className="table-primary">
//                         <th>Image</th>
//                         <th>Title</th>
//                         <th>Price</th>
//                         <th>Total Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cartItems.map((item) => {
//                         const itemTotal = item.price * item.quantity;
//                         totalAmount += itemTotal;

//                         return (
//                             <tr key={item.id}>
//                                 <td>
//                                     <img
//                                         src={`data:image/jpeg;base64,${item.file}`}
//                                         alt={item.title}
//                                         style={{
//                                             width: "100px",
//                                             height: "100px",
//                                             marginRight: "10px",
//                                         }}
//                                     />
//                                 </td>
//                                 <td>{item.title}</td>
//                                 <td>{item.price}</td>
//                                 <td>{itemTotal}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//             <table className="table">
//                 <thead>
//                     <tr className="table-primary">
//                         <th className="col-6"> Image</th>

//                         <th className="col-6">Total Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td> total</td>
//                         <td>{totalAmount}</td>
//                     </tr>
//                 </tbody>
//             </table>
//             <button className="btn btn-info" onClick={handlePlaceOrder}>
//                 Place order
//             </button>

//             {/* Popup */}
//             {showPopup && (
//                 <div className="popup">
//                     {/* You can customize the content of the popup here */}
//                     <p>Order placed successfully!</p>
//                     <button onClick={() => setShowPopup(false)}>Close</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// // Map the state from the Redux store to component props
// const mapStateToProps = (state) => {
//     return {
//         cartItems: state.cart,
//     };
// };

// // Connect Cart component to Redux
// export default connect(mapStateToProps)(Cart);

//version 2
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Cart(props) {
//     const { cartItems } = props;
//     console.log(cartItems);

//     return (
//         <div>
//             <h1>Cart</h1>

//             {/* Render cart items here */}
//         </div>
//     );
// }

// export default Cart;
//version  3

// Cart.js
// Cart.js

import { useState } from "react";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./action"; // Import the addToCart action

import "./style.css"; // Import your CSS file for styling

function Cart(props) {
    const { cartItems, dispatch } = props;
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    let totalAmount = 0;

    const handlePlaceOrder = () => {
        // Add logic for placing the order here
        // For now, just toggle the showPopup state
        setShowPopup(!showPopup);
        setTimeout(() => {
            navigate("/");
        }, 3000);
        // navigate("/");
    };

    const increaseQuantity = (itemId) => {
        // Dispatch an action to increase the quantity for a specific item
        dispatch(addToCart({ id: itemId, quantity: 1 }));
    };

    const decreaseQuantity = (itemId) => {
        // Dispatch an action to decrease the quantity for a specific item

        dispatch(addToCart({ id: itemId, quantity: -1 }));
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>

            <div className="cart-items">
                {cartItems.map((item) => {
                    const itemTotal = item.price * item.quantity;
                    totalAmount += itemTotal;
                    const appp = item.quantity;
                    console.log(appp);
                    let pk = "";
                    if (appp === 0) {
                        pk = "disable";
                        console.log(pk);
                    }
                    return (
                        <div className="cart-item" key={item.id}>
                            <img
                                src={`data:image/jpeg;base64,${item.file}`}
                                alt={item.title}
                                className="item-image"
                            />
                            <div className="item-details">
                                <p className="item-title">{item.title}</p>
                                <div className="buttoncont">
                                    <button
                                        className="btn btn-secondary mr-1"
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                    >
                                        +
                                    </button>
                                    <p className="m-2">{item.quantity}</p>
                                    <button
                                        className={`ml-1 btn btn-secondary ${pk}`}
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                    >
                                        -
                                    </button>
                                </div>
                                <p className="item-price">{`Price: $${item.price}`}</p>
                                <p className="item-total">{`Total: $${itemTotal}`}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="cart-summary">
                <p className="total-amount">{`Total Amount: $${totalAmount}`}</p>
            </div>

            <button className="place-order-btn" onClick={handlePlaceOrder}>
                Place Order
            </button>

            {/* Popup */}
            {showPopup && (
                <div className="popup">
                    <p>Order placed successfully!</p>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
            )}
        </div>
    );
}

// Map the state from the Redux store to component props
const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
    };
};

// Connect Cart component to Redux
export default connect(mapStateToProps)(Cart);
