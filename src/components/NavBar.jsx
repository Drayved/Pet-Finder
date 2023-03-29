import React from "react"
import {Link}from "react-router-dom"

export default function NavBar(){
    return(
        <div className="navbar">
            <ul className="animal-btns">
                <li>
                    <Link to="/dogs">Dogs</Link>
                </li>
                <li>
                    <Link to="cats">Cats</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="horses">Horses</Link>
                </li>
                <li>
                    <Link to="birds">Birds</Link>
                </li>
            </ul>
        </div>

    )
}