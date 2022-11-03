// src/pages/404.js
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/pages/404.scss"

export default function NotFound() {
    return (
        <Layout>
            <Seo title="404 Not Found" description="ページが見つかりません" />
            <div className="messages-wrapper">
                <h1>ご指定のページが見つかりませんでした。</h1>
                <p>アクセスしようとしたページは削除、変更されたか、現在利用できない可能性があります。
                    お手数をおかけしますが、上部のページメニューからお探しください。</p>
                <Link to="/">トップページへ</Link>
            </div>
        </Layout>
    )
}