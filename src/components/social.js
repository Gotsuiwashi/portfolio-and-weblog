import { Link } from "gatsby"
import React from "react"
import GITHUB_IMG from "../images/github.svg"
import TWITTER_IMG from "../images/twitter.svg"
import "../styles/components/social.scss"

export default function Social() {
    return (
        <ul className="social">
            <li className="github"><Link to="/"><img src={GITHUB_IMG} classNameName="logo-image" alt="logo"></img></Link></li>
            <li className="twitter"><Link to="/"><img src={TWITTER_IMG} classNameName="logo-image" alt="logo"></img></Link></li>
        </ul>
    )
}