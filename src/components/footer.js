// src/components/header.js
import React from "react"
import Nav from "../components/navigation"
import "../styles/footer.css"
import Social from "./social"

export default function Footer() {
    return (
        <footer>
            <Social></Social>
            <Nav></Nav>
            <p className="copyright"><small>&#169; Gotsuiwashi All rights reserved.</small></p>
        </footer>
    )
}