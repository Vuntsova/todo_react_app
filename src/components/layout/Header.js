import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="container text-center bg-warning p-3 mt-5">
            <h2>To Do List</h2>
            <h5>
            <Link to="/">Home</Link>{" | "}
                <Link to="/about">About</Link>
            </h5>
        </header>
    )
}

export default Header
