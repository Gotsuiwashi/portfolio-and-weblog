// src/templates/post.js
import React from "react";
import Layout from "../components/layout";
import PostTag from "../components/post-tag";
import Seo from "../components/seo";
import "../styles/templates/post.scss";

export default function Post({ pageContext }) {
    const { title, updatedAt, image, tags } = pageContext.post;
    const description = pageContext.post.description.description;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <Seo title={title} description={description} />
            <div className="post-wrapper">
                <div className="post-header">
                    <h1>{title}</h1>
                    <p className="post-date">{updatedAt}</p>
                    <div className="post-link-tags">
                        {tags.map(tag =>
                            <PostTag tag={tag} />
                        )}</div>
                </div>

                {image &&
                    <img src={image.file.url} className="post-image" alt="post-cover"></img>
                }
                <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />

                <div className="post-link-tags">
                    {tags.map(tag =>
                        <PostTag tag={tag} />
                    )}</div>
            </div>
        </Layout>
    )
}