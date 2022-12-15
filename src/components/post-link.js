// src/components/post-link.js
import { Link } from "gatsby";
import React from "react";
import "../styles/components/post-link.scss";
import PostTag from "./post-tag";

export default function PostLink({ post }) {
    const { title, updatedAt, image, tags } = post;
    const pageLink = `/blog/${post.slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link">
                <div>
                    {image ?
                        <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
                        : <div className="post-link-image-alt"><p>{"NO IMAGE"}</p></div>
                    }
                </div>
                <div className="post-link-text">
                    <h2>{title}</h2>
                    <div className="post-link-tags">
                        {tags.map(tag =>
                            <PostTag tag={tag} />
                        )}</div>
                    <p className="post-link-date">{updatedAt}</p>
                </div>
            </div>
        </Link>
    )
}