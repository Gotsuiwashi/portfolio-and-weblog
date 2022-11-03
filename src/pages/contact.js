import React from "react"
import ContactForm from "../components/contact-form"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function About() {
    return (
        <Layout>

            <Seo title="Career Detail" description="経歴紹介ページ" />
            <div className="messages-wrapper">
                <ContactForm></ContactForm></div>
        </Layout>
    )
}