import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Success() {
    return (
        <Layout>
            <Seo title="ありがとうございます" description="これはサクセスページです" />
            <div className="messages-wrapper">
                <h1>ご連絡ありがとうございます</h1>
                <p>近日中にご返信いたします。</p>
            </div>
        </Layout>
    )
}