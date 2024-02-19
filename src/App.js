import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/admin";
import MyNavbar from "./components/Navbar";
import Cart from "./components/cart";
import EditProduct from "./components/Editproduct";
import Homeprasan from "./components/homeprasan";
import HomePage from "./components/homeprasan";
import LoginPage from "./components/homeprasan";
import GoogleAuth from "./components/google";
import RegisterForm from "./components/Register";
import FunctionalLifecycleExample from "./components/P";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Admin />} /> */}
                    <Route path="/home" element={<MyNavbar />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/reg" element={<RegisterForm />} />
                    <Route path="adminview" element={<Admin />} />
                    <Route path="/edit/:id" element={<EditProduct />} />
                    <Route
                        path="/li"
                        element={<FunctionalLifecycleExample />}
                    />
                    {/* <Route path="/g" element={<GoogleAuth />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
