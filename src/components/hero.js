// src/components/hero.js
import React from "react"
import { Helmet } from "react-helmet"
import "../styles/components/hero.scss"

export default function Hero() {
    return (
        <div className="hero">
            <Helmet>
                <script src="https://kit.fontawesome.com/0c4dfe9ecb.js" crossorigin="anonymous"></script>
            </Helmet>
            <h1 className="hero-text">
                ゴツイワシノ<br />
                ウェブサイト
            </h1>
        </div >
    )
}