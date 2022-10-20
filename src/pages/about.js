import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function About() {
    return (
        <Layout>
            <Seo title="Career Detail" description="経歴紹介ページ" />
            <div className="not-found-message">
                <h1>404 Not Found</h1>
                <Link to="/">トップページへ</Link>
            </div>
        </Layout>
    )
}