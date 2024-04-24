//import { useState } from "react";
import "../App.css"

const NavBar = () => {
    return (
        <nav className="Navbar">
            <div className = "Navbar">
                <h2>ShareSpace</h2>
                <input 
                type="text" id="navSearch" placeholder="Search">
                </input>
                <a className = "navButtons">
                    <button className="upload">+ Upload</button>
                </a>
            </div>
        </nav>
    )
}

export default NavBar;
