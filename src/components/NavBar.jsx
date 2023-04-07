import React from "react"
import {Link}from "react-router-dom"

export default function NavBar(){
    return(
        <div className="navbar">
            <ul className="animal-btns">
                <li className="animal-btn">
                    <Link to="dogs">Dogs</Link>
                </li>
                <li className="animal-btn">
                    <Link to="cats">Cats</Link>
                </li>
                <li className="animal-btn">
                    <Link to="/">Home</Link>
                </li>
                <li className="animal-btn">
                    <Link to="horses">Horses</Link>
                </li>
                <li className="animal-btn">
                    <Link to="birds">Birds</Link>
                </li>
            </ul>
        </div>

    )
}