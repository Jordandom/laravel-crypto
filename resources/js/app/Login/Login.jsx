import React, { useState, useEffect } from "react";

export default function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const onChange = event => {
        const allowed_names = ["email", "password"],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return {
                    ...prev_values,
                    [name]: value
                };
            });
        }
    };

    const handleLogin = async event => {
        event.preventDefault();

        const response = await fetch("/login", {
            method: "post",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json", // tell Laravel (backend) what we want in response
                "Content-type": "application/json", // tell backend what we are sending
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content") // prove to backend that this is authorized
            }
        });

        const response_data = await response.json();

        console.log(response_data);
    };

    return (
        <form
            action="/login"
            className="form-form"
            method="post"
            onSubmit={handleLogin}
        >
            <div className="form-group">
                <label htmlFor="name">Login</label>

                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>

                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <button>Login</button>
            </div>
        </form>
    );
}
