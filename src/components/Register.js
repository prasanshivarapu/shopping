import React, { useState } from "react";

const RegisterForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: fullName,
            email: email,
            password: password,
        };
        console.log(formData);
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
                                        alt="register form"
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
                                            Create an account
                                        </h5>

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    className="form-control form-control-lg"
                                                    value={fullName}
                                                    onChange={
                                                        handleFullNameChange
                                                    }
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="fullName"
                                                >
                                                    Full Name
                                                </label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control form-control-lg"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="email"
                                                >
                                                    Email address
                                                </label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    className="form-control form-control-lg"
                                                    value={password}
                                                    onChange={
                                                        handlePasswordChange
                                                    }
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="password"
                                                >
                                                    Password
                                                </label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button
                                                    className="btn btn-dark btn-lg btn-block"
                                                    type="submit"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>

                                        <p
                                            className="mb-5 pb-lg-2"
                                            style={{ color: "#393f81" }}
                                        >
                                            Already have an account?{" "}
                                            <a
                                                href="#!"
                                                style={{ color: "#393f81" }}
                                            >
                                                Login here
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

export default RegisterForm;
