import React, { useEffect, useState } from "react";
import Products from "./ProductsList ";

const dummyData = [
    {
        name: "Product 1",
        file: "https://via.placeholder.com/300.png/09f/fff",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac hendrerit nunc. Nullam vitae nulla ut purus fringilla accumsan.",
        price: 99.99,
    },
    {
        name: "Product 2",
        photoUrl: "https://dummyimage.com/300x300",
        description:
            "Sed faucibus arcu et est tincidunt, id venenatis purus eleifend. Nulla eget felis sit amet justo posuere hendrerit.",
        price: 149.99,
    },
    {
        name: "Product 3",
        photoUrl: "https://via.placeholder.com/300.png/09f/fff",
        description:
            "Pellentesque feugiat lacus id sagittis cursus. Proin eget aliquam nunc. Fusce accumsan felis nec tortor vehicula bibendum.",
        price: 199.99,
    },
    {
        name: "Product 4",
        photoUrl: "https://via.placeholder.com/300.png/09f/fff",
        description:
            "Morbi tincidunt leo vel libero cursus tincidunt. Ut ut quam vel tortor volutpat fermentum. Integer vulputate urna ac odio hendrerit, eu faucibus lacus ultrices.",
        price: 79.99,
    },
    {
        name: "Product 5",
        photoUrl: "https://via.placeholder.com/300.png/09f/fff",
        description:
            "Vestibulum efficitur odio et metus dictum, sit amet fermentum augue accumsan. Integer in mi sed magna ullamcorper consectetur a in libero.",
        price: 299.99,
    },
];

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/getproducts")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data from server:", data);
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Error fetching data: " + error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    // if (error) {
    //     return <p>Error: {error}</p>;
    // }
    const productsToDisplay = products.length > 0 ? products : dummyData;

    return (
        <div>
            {/* <h2>Product List</h2> */}

            <div className="block">
                {productsToDisplay.map((product) => (
                    <Products happy={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
