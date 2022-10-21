// src/templates/post.js
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/templates/post.scss";

export default function Works({ pageContext }) {
    const { title, updatedAt, image } = pageContext.work;
    const description = pageContext.work.technique;
    const body = pageContext.work.description.childMarkdownRemark.html;

    return (
        <Layout>
            <Seo title={title} description={description} />
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-date">{updatedAt}</p>
            </div>
            <img src={image.file.url} className="post-image" alt="post-cover"></img>
            <p>{description}</p>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
        </Layout>
    )
}