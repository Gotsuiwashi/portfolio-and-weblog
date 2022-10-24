// src/components/header.js
import { Link } from "gatsby"
import React from "react"
import Nav from "../components/navigation"
import LOGO_IMG from "../images/gatsby-icon.png"
import "../styles/components/header.scss"
import Social from "./social"

export default function Header() {
    return (
        <header>
            <Link to="/" className="main-logo">
                <img src={LOGO_IMG} className="logo-image" alt="logo"></img>
            </Link>
            <Social></Social>
            <Nav></Nav>
        </header>
    )
}