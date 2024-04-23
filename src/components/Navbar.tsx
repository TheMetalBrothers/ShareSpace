//import { useState } from "react";
import "../App.css"

const NavBar = () => {
    return (
        <nav className="Navbar">
            <div className = "brandName">
                <h2>ShareSpace</h2>
                <input 
                type="text" id="navSearch" placeholder="Search">
                </input>
                <a className = "navButtons">
                    <button>+ Upload</button>
                </a>
                    <button className="button2">Login</button>
            </div>
        </nav>
    )
}

export default NavBar;
