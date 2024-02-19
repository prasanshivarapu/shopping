import React from "react";
import GoogleAuth from "./google";
import RegisterForm from "./Register";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const navigate = useNavigate();
    const reg = () => {
        navigate("/reg");
    };
    return (
        <section className="vh-90" style={{ backgroundColor: "#9A616D" }}>
            <div className="container py-3 h-50">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-7 col-lg-6 d-none d-md-block">
                                    <img
                                        src="https://res.cloudinary.com/dzleppv07/image/upload/v1707399444/ecommerce_e2umtg.jpg"
                                        alt="login form"
                                        className="img-fluid h-100"
                                        style={{
                                            borderRadius: "1rem 0 0 1rem",
                                        }}
                                    />
                                </div>
                                <div className="col-md-5 col-lg-6 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <h5
                                            className="fw-normal mb-3 pb-3"
                                            style={{ letterSpacing: "1px" }}
                                        >
                                            Sign into your account
                                        </h5>

                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form2Example17"
                                                className="form-control form-control-lg"
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form2Example17"
                                            >
                                                Email address
                                            </label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form2Example27"
                                                className="form-control form-control-lg"
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="form2Example27"
                                            >
                                                Password
                                            </label>
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button
                                                className="btn btn-dark btn-lg btn-block mr-2"
                                                type=""
                                            >
                                                Login
                                            </button>
                                            <a
                                                className="small text-muted ml-2 p-5"
                                                href="#!"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>

                                        <GoogleAuth />

                                        <p
                                            className="mb-5 pb-lg-2"
                                            style={{ color: "#393f81" }}
                                        >
                                            Don't have an account?{" "}
                                            <a
                                                href="#!"
                                                style={{ color: "#393f81" }}
                                                onClick={reg}
                                            >
                                                Register here
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
