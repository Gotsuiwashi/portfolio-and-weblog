import { Link } from "gatsby"
import React from "react"
import "../styles/header.css"

export default function Nav() {
    return (
        <nav>
            <ul className="cf">
                <li className="about"><Link to="/">About</Link></li>
                <li className="works"><Link to="/">Works</Link></li>
                <li className="blog"><Link to="/">Blog</Link></li>
                <li className="contact"><Link to="/">Contact</Link></li>
            </ul>
        </nav>
    )
}