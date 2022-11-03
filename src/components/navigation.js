import { Link } from "gatsby"
import React from "react"
import "../styles/components/nav.scss"

export default function Nav() {
    return (
        <nav className="nav">
            <ul className="links">
                <li className="profile"><Link to="/profile">Profile</Link></li>
                <li className="works"><Link to="/works">Works</Link></li>
                <li className="blog"><Link to="/blog">Blog</Link></li>
                <li className="contact"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}