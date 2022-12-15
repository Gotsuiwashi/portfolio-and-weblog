// src/components/header.js
import React from "react"
import Nav from "../components/navigation"
import "../styles/components/footer.scss"

export default function Footer() {
    return (
        <footer>
            <Nav></Nav>
            <p className="copyright"><small>&#169; Gotsuiwashi All rights reserved.</small></p>
        </footer>
    )
}