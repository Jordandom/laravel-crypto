import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="logo">Laravel Crypto</div>

            <nav>
                <Link to="/">Home</Link>

                <Link to="/login">Login</Link>

                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}
