// src/templates/post.js
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/templates/post.scss";

export default function Works({ pageContext }) {
    const { title, image } = pageContext.work;
    const description = pageContext.work.technique;
    const body = pageContext.work.description.childMarkdownRemark.html;

    return (
        <Layout>
            <Seo title={title} description={description} />
            <div className="deliverable-wrapper">

                <img src={image.file.url} className="post-image" alt="post-cover"></img>

                <div className="post-header">
                    <h1>{title}:企業名と製品名</h1>
                    <p className="post-date">{description}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />

            </div>
        </Layout>
    )
}