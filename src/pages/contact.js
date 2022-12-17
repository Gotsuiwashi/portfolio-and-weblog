import React from "react"
import ContactForm from "../components/contact-form"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function About() {
    return (
        <Layout>
            <Seo title="Contact" description="お問い合わせはこのページ" />
            <div className="messages-wrapper">

                <h1>オトイアワセ</h1>
                <hr />
                <p>お気軽にお問い合わせください</p>
                <ContactForm></ContactForm></div>
        </Layout>
    )
}