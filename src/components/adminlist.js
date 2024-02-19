import React from "react";
import { Link } from "react-router-dom";
function Adminlist(props) {
    const { happy } = props;

    return (
        <div key={happy.id} className="s-product">
            <div className="image-con">
                <img
                    className="image"
                    src={`data:image/jpeg;base64,${happy.file}`}
                    alt={happy.name}
                />
            </div>

            <p className="price">Price: {happy.price}</p>
            <p className="des"> {happy.description}</p>

            <Link
                to={`/edit/${happy.id}`}
                className="btn btn-primary mb-2 mt-5"
            >
                Update now
            </Link>
        </div>
    );
}

export default Adminlist;
