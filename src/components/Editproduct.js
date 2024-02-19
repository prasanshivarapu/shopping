// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function EditProduct() {
//     const { id } = useParams(); // Use useParams hook to get route parameters
//     const [product, setProduct] = useState({
//         file: "",
//         name: "",
//         price: "",
//         description: "",
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `http://localhost:5000/getproduct/${id}`,
//                 );
//                 const data = await response.json();
//                 setProduct(data);
//                 console.log(data);
//             } catch (error) {
//                 console.error("Error fetching product:", error);
//             }
//         };

//         fetchData();
//     }, [id]);
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("happy", product);
//         // Update product details
//         fetch(`http://localhost:5000/updateproduct/${id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(product),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//                 // Redirect or show a success message
//             })
//             .catch((error) => console.error("Error updating product:", error));
//     };

//     return (
//         //onChange={handleChange} onSubmit={handleSubmit}
//         <div className="container">
//             <h2>Adding product</h2>
//             <div className="row">
//                 <div className="col-md-6">
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group mb-3">
//                             <label htmlFor="file">Product File:</label>
//                             <input
//                                 required
//                                 type="file"
//                                 className="form-control"
//                                 id="file"
//                                 name="file"
//                                 // value={product.file}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="form-group mb-3">
//                             <label htmlFor="firstname">Name:</label>
//                             <input
//                                 required
//                                 type="text"
//                                 className="form-control"
//                                 id="firstname"
//                                 name="name"
//                                 value={product.name}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="form-group mb-3">
//                             <label htmlFor="price">Price:</label>
//                             <input
//                                 required
//                                 type="text"
//                                 className="form-control"
//                                 id="price"
//                                 name="prize"
//                                 value={product.prize}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="form-group mb-3">
//                             <label htmlFor="description">Description:</label>
//                             <textarea
//                                 required
//                                 className="form-control"
//                                 id="description"
//                                 name="description"
//                                 value={product.description}
//                                 onChange={handleChange}
//                             ></textarea>
//                         </div>
//                         <button type="submit" className="btn btn-primary mt-3">
//                             update
//                         </button>
//                         {/* <p>{success}</p>
//                         <p style={{ color: "red" }}>{error}</p> */}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EditProduct;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditProduct() {
    const { id } = useParams(); // Use useParams hook to get route parameters
    const [product, setProduct] = useState({
        file: null,
        name: "",
        price: "",
        description: "",
    });
    const [success, setsus] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/getproduct/${id}`,
                );
                const data = await response.json();
                setProduct(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", product.file);
        formData.append("name", product.name);
        formData.append("price", product.prize);
        formData.append("description", product.description);
        console.log(product);
        fetch(`http://localhost:5000/updateproduct/${id}`, {
            method: "PUT",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setsus(data);
                // Redirect or show a success message
            })
            .catch((error) => console.error("Error updating product:", error));
    };

    return (
        <div className="container">
            <h2>Edit Product</h2>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="file">Product File:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="file"
                                name="file"
                                onChange={(e) =>
                                    setProduct({
                                        ...product,
                                        file: e.target.files[0],
                                    })
                                }
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="prices">Price:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="prices"
                                name="prize"
                                value={product.prize}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">
                            Update
                        </button>
                        <p>{success.message}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
