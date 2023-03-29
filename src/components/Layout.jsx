import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <div>
            <NavBar />
            <Header />
            <Outlet />
            <Footer />
        </div>
        
    )
}