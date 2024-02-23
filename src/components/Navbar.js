import React from "react";
import "./style.css";
// import { connect } from "react-redux";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import ProductsList from "./Products";
import { Link } from "react-router-dom";
// import image from "./download.jpeg";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function MyNavbar(props) {
    const [log, setlog] = useState(true);
    const { cart } = props;
    const navigate = useNavigate();
    // const carT = () => {
    //     navigate("./cart");
    // };
    const login = () => {
        Cookies.remove("token");
        navigate("/");
    };
    const addProduct = () => {
        navigate("./admin");
    };
    let button = log ? "Logout" : "Login";
    // console.log("caprt", cart.length);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img
                            src="./images/download.png"
                            width="130"
                            height="80"
                            // className="d-inline-block align-top"
                            alt=""
                        />
                        {/* <button
                            onClick={addProduct}
                            variant="outline-primary"
                            className="btn btn-warning"
                        >
                            Add Product
                        </button> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="right">
                            <Nav.Link as={Link} to="/cart">
                                <Button variant="outline-primary">
                                    {/* Cart ({cart.length}) */}
                                    Cart
                                </Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Button onClick={login} variant="outline-primary">
                                    logout
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ProductsList />
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     cart: state,
// });

// export default connect(mapStateToProps)(MyNavbar);
export default MyNavbar;
