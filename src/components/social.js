import { Link } from "gatsby"
import React from "react"
import GITHUB_IMG from "../images/github-brown.svg"
import GITLAB_IMG from "../images/gitlab-logo-700.svg"
import "../styles/components/social.scss"

export default function Social() {
    return (
        <ul className="social">
            <li className="github"><Link to="https://github.com/Gotsuiwashi" target="_blank" rel="noopener noreferrer"><img src={GITHUB_IMG} classNameName="logo-image" alt="logo"></img></Link></li>
            <li className="gitlab"><Link to="https://gitlab.com/Gotsuiwashi" target="_blank" rel="noopener noreferrer"><img src={GITLAB_IMG} classNameName="logo-image" alt="logo"></img></Link></li>
        </ul>
    )
}