// src/pages/404.js
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NOT_FOUND_IMG from "../images/pic1.jpg"
import "../styles/404.scss"

export default function NotFound() {
    return (
        <Layout>
            <Seo title="404 Not Found" description="ページが見つかりません" />
            <div className="not-found-message">
                <h1>404 Not Found</h1>
                <Link to="/">トップページへ</Link>
            </div>
            <img src={NOT_FOUND_IMG} className="not-found-image" alt="not found" />
        </Layout>
    )
}