// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addToCart } from './reducer';

// function Products(props) {
//   const { happy, cart, addToCart } = props;
//   const [suc, setsuc] = useState("");
//   const [err, seterr] = useState("");
//   const [quantity, setQuantity] = useState(0);
//   const existingProductIndex = cart.findIndex(item => item.id === happy.id);
//   const isInCart = existingProductIndex !== -1;

//   const increase = () => {
//     setQuantity(prevQuantity => prevQuantity + 1);
//     handleCartUpdate(quantity + 1);
//     setsuc("Product quantity updated in cart");
//   };

//   const decrease = () => {
//     if (quantity > 0) {
//       setQuantity(prevQuantity => prevQuantity - 1);
//       handleCartUpdate(quantity - 1);
//     }
//     if(quantity>=1){
//        seterr("Product quantity is decreased")
//     }

//   };

//   const handleCartUpdate = (newQuantity) => {
//     if (newQuantity >= 0) {
//       let updatedCart;

//       if (isInCart) {
//         updatedCart = [...cart];
//         updatedCart[existingProductIndex] = { ...updatedCart[existingProductIndex], quantity: newQuantity };
//         // setsuc("Product quantity updated in cart");
//       } else {
//         updatedCart = [...cart, { ...happy, quantity: newQuantity }];
//         // setsuc("Product added to cart");
//       }

//       addToCart(updatedCart);
//       console.log("", updatedCart);

//       setTimeout(() => {
//         setsuc("");
//         seterr("")
//       }, 3000);
//     }
//   };

//   return (
//     <div key={happy.id} className='s-product'>
//       <img className='image' src={`data:image/jpeg;base64,${happy.file}`} alt={happy.name} />
//       <h3>{happy.name}</h3>
//       <p className='price'>Price: {happy.price}</p>
//       <p>Description: {happy.description}</p>
//       <div className="quantity-controls">
//         <button onClick={decrease} className='btn btn-secondary' variant="outline-secondary">-</button>
//         <span className="quantity m-2">{quantity}</span>
//         <button onClick={increase} className='btn btn-secondary' variant="outline-secondary">+</button>
//       </div>
//       <span className="added mt-5">{suc}</span>
//       <span className="removed mt-5">{err}</span>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   cart: state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (updatedCart) => dispatch(addToCart(updatedCart)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Products);

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addToCart } from './reducer';

// function Products(props) {
//   const { happy, cart, addToCart } = props;
//   const [suc, setsuc] = useState("");

//   const existingProductIndex = cart.findIndex(item => item.id === happy.id);
//   const isInCart = existingProductIndex !== -1;

//   const cycle = () => {
//     let updatedCart;

//     if (isInCart) {
//       updatedCart = [...cart];
//       updatedCart[existingProductIndex] = { ...updatedCart[existingProductIndex], quantity: updatedCart[existingProductIndex].quantity + 1 };
//       setsuc("Product quantity updated in cart");
//     } else {
//       updatedCart = [...cart, { ...happy, quantity: 1 }];
//       setsuc("Product added to cart");
//     }

//     addToCart(updatedCart);
//     // console.log('Cart State:', updatedCart);

//     setTimeout(() => {
//       setsuc("");
//     }, 3000);
//   };

//   return (
//     <div key={happy.id} className='s-product'>
//       <img className='image' src={`data:image/jpeg;base64,${happy.file}`} alt={happy.name}  />
//       <h3>{happy.name}</h3>
//       <p className='price'>Price: {happy.price}</p>
//       <p>Description: {happy.description}</p>
//       <button onClick={cycle} className='btn btn-primary mb-2' >Buy now</button> <br/>
//       <span className="added mt-5">{suc}</span>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   cart: state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (updatedCart) => dispatch(addToCart(updatedCart)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Products);

// // Products.js
// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addToCart } from './reducer';

// function Products(props) {
//   const { happy, cart, addToCart } = props;
//   const [suc, setsuc] = useState("");

//   const isInCart = cart.find(item => item.id === happy.id);

//   const cycle = () => {
//     let updatedCart;

//     if (isInCart) {
//       updatedCart = cart.map(item =>
//         item.id === happy.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setsuc("Product quantity updated in cart");
//     } else {
//       updatedCart = [...cart, { ...happy, quantity: 1 }];
//       setsuc("Product added to cart");
//     }

//     addToCart(updatedCart);

//     // Log the cart state to the console
//     console.log('Cart State:', updatedCart);

//     setTimeout(() => {
//       setsuc("");
//     }, 3000);
//   };

//   return (
//     <div key={happy.id} className='s-product'>
//       <img className='image' src={`data:image/jpeg;base64,${happy.file}`} alt={happy.name}  />
//       <h3>{happy.name}</h3>
//       <p className='price'>Price: {happy.price}</p>
//       <p>Description: {happy.description}</p>
//       <button onClick={cycle} className='btn btn-primary mb-2'>Buy now</button> <br/>
//       <span className="added mt-5">{suc}</span>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   cart: state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (updatedCart) => dispatch(addToCart(updatedCart)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Products);

// import { useState } from "react";
// import React from "react";
// import "./style.css";

// const initialCart = [
//     {
//         id: 5421,
//         title: "socks",
//         quantity: 5,
//     },
// ];

// function Products(props) {
//     const [suc, setsuc] = useState("");
//     const [quantity, setquan] = useState(0);

//     const [ball, setball] = useState(initialCart);
//     const { happy } = props;

//     const cycle = () => {
//         console.log("Before update - ball:", ball);

//         setsuc("Product added to cart");

//         const newProduct = {
//             id: happy.id,
//             title: happy.name,
//             quantity: quantity,
//             price: happy.price,
//         };
//         console.log(newProduct);
//         const updatedCart = [...ball, newProduct];
//         setball(updatedCart);

//         console.log("After update - ball:", updatedCart);

//         setTimeout(() => {
//             setsuc("");
//         }, 3000);
//     };

//     const dec = () => {
//         if (quantity === 0) {
//             return;
//         }
//         setquan(quantity - 1);
//     };
//     const inc = () => {
//         if (quantity === 6) {
//             return;
//         }
//         setquan(quantity + 1);
//     };
//     return (
//         <div key={happy.id} className="s-product">
//             <div className="image-con">
//                 <img
//                     className="image"
//                     src={`data:image/jpeg;base64,${happy.file}`}
//                     alt={happy.name}
//                 />
//             </div>
//             <h3>{happy.name}</h3>
//             <p className="price">Price: {happy.price}</p>
//             <p className="des">Description: {happy.description}</p>

//             <div className="quantity-controls">
//                 {" "}
//                 <button
//                     onClick={dec}
//                     className="btn btn-secondary"
//                     variant="outline-secondary"
//                 >
//                     -
//                 </button>
//                 <span className="quantity m-2">{quantity}</span>{" "}
//                 <button
//                     onClick={inc}
//                     className="btn btn-secondary"
//                     variant="outline-secondary"
//                 >
//                     +
//                 </button>{" "}
//             </div>
//             <button onClick={cycle} className="btn btn-primary mb-2 mt-5">
//                 Buy now
//             </button>
//             <span className="added ">{suc}</span>
//         </div>
//     );
// }

// export default Products;

// data 17 feb 2024

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import { addToCart } from "./action"; // Import your action

// function Products(props) {
//     const navigate = useNavigate();
//     const [suc, setsuc] = useState("");
//     const [quantity, setquan] = useState(0);
//     const { dispatch, happy } = props;

//     const cycle = () => {
//         setsuc("Product added to cart");

//         const newProduct = {
//             id: happy.id,
//             title: happy.name,
//             quantity: quantity,
//             price: happy.price,
//             file: happy.file,
//         };

//         dispatch(addToCart(newProduct));

//         setTimeout(() => {
//             setsuc("");
//         }, 3000);
//     };

//     const dec = () => {
//         if (quantity === 0) {
//             return;
//         }
//         setquan(quantity - 1);
//     };

//     const inc = () => {
//         setquan(quantity + 1);
//     };

//     return (
//         <div key={happy.id} className="s-product">
//             <div className="image-con">
//                 <img
//                     className="image"
//                     src={`data:image/jpeg;base64,${happy.file}`}
//                     alt={happy.name}
//                 />
//             </div>
//             {/* <h3>{happy.name}</h3> */}
//             <p className="price">Price: {happy.price}</p>
//             {/* <p className="des">Description: {happy.description}</p> */}
//             <p className="des"> {happy.description}</p>
//             <div className="quantity-controls">
//                 {" "}
//                 <button
//                     onClick={dec}
//                     className="btn btn-secondary"
//                     variant="outline-secondary"
//                 >
//                     -
//                 </button>
//                 <span className="quantity m-2">{quantity}</span>{" "}
//                 <button
//                     onClick={inc}
//                     className="btn btn-secondary"
//                     variant="outline-secondary"
//                 >
//                     +
//                 </button>{" "}
//             </div>
//             <button onClick={cycle} className="btn btn-primary mb-2 mt-5">
//                 Buy now
//             </button>
//             <span className="added ">{suc}</span>
//         </div>
//     );
// }
// export default connect()(Products);

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./action"; // Import your action
import Slider from "react-slick";

function Products(props) {
    const navigate = useNavigate();
    const [suc, setsuc] = useState("");
    const [quantity, setquan] = useState(0);
    const { dispatch, happy } = props;

    const cycle = () => {
        setsuc("Product added to cart");

        const newProduct = {
            id: happy.id,
            title: happy.name,
            quantity: quantity,
            price: happy.price,
            file: happy.file,
        };

        dispatch(addToCart(newProduct));

        setTimeout(() => {
            setsuc("");
        }, 3000);
    };

    const dec = () => {
        if (quantity === 0) {
            return;
        }
        setquan(quantity - 1);
    };

    const inc = () => {
        setquan(quantity + 1);
    };

    return (
        <div key={happy.id} className="s-product">
            {/* <Slider> */}
            <div className="image-con">
                <img
                    className="image"
                    src={`data:image/jpeg;base64,${happy.file}`}
                    alt={happy.name}
                />
            </div>

            {/* Add more images if needed */}
            {/* </Slider> */}
            <p className="price">Price: {happy.price}</p>
            <p className="des"> {happy.description}</p>
            <div className="quantity-controls">
                {" "}
                <button
                    onClick={dec}
                    className="btn btn-secondary"
                    variant="outline-secondary"
                >
                    -
                </button>
                <span className="quantity m-2">{quantity}</span>{" "}
                <button
                    onClick={inc}
                    className="btn btn-secondary"
                    variant="outline-secondary"
                >
                    +
                </button>{" "}
            </div>
            <button onClick={cycle} className="btn btn-primary mb-2 mt-5">
                Buy now
            </button>
            <span className="added ">{suc}</span>
        </div>
    );
}
export default connect()(Products);

// export default Products;

// import React, { useState } from "react";
// import "./style.css";

// const initialCart = [
//     {
//         id: 5421,
//         title: "socks",
//         quantity: 5,
//     },
// ];

// function Products(props) {
//     const [notification, setNotification] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [cart, setCart] = useState([...initialCart]);
//     const { happy } = props;

//     const addToCart = () => {
//         // Check if the product is already in the cart
//         const existingProduct = cart.find((product) => product.id === happy.id);

//         if (existingProduct) {
//             // If the product is already in the cart, update the quantity
//             setCart((prevCart) =>
//                 prevCart.map((product) =>
//                     product.id === happy.id
//                         ? { ...product, quantity: product.quantity + quantity }
//                         : product,
//                 ),
//             );
//         } else {
//             // If the product is not in the cart, add it
//             const newProduct = {
//                 id: happy.id,
//                 title: happy.name,
//                 quantity: quantity,
//                 price: happy.price,
//             };

//             setCart((prevCart) => [...prevCart, newProduct]);
//         }

//         setNotification("Product added to cart");
//         console.log(cart);
//         setTimeout(() => {
//             setNotification("");
//         }, 3000);
//     };

//     const decrementQuantity = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     const incrementQuantity = () => {
//         setQuantity(quantity + 1);
//     };

//     return (
//         <div key={happy.id} className="s-product">
//             <div className="image-con">
//                 <img
//                     className="image"
//                     src={`data:image/jpeg;base64,${happy.file}`}
//                     alt={happy.name}
//                 />
//             </div>
//             <h3>{happy.name}</h3>
//             <p className="price">Price: {happy.price}</p>
//             <p className="des">Description: {happy.description}</p>

//             <div className="quantity-controls">
//                 <button
//                     onClick={decrementQuantity}
//                     className="btn btn-secondary"
//                     variant="outline-secondary"
//                 >
//                     -
//                 </button>
//                 <span className="quantity m-2">{quantity}</span>
//                 <button
//                     onClick={incrementQuantity}
//                     className="btn btn-secondary"
//                     variant="outline-secondary"
//                 >
//                     +
//                 </button>
//             </div>
//             <button onClick={addToCart} className="btn btn-primary mb-2 mt-5">
//                 Buy now
//             </button>
//             <span className="added">{notification}</span>
//         </div>
//     );
// }

// export default Products;
