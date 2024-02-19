import { useState, useEffect } from "react";
import Adminlist from "./adminlist";

function AdminProducts() {
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

    return (
        <div>
            <div className="block">
                {products.map((product) => (
                    <Adminlist happy={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default AdminProducts;
