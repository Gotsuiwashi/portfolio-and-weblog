// src/components/work-link.js
import { Link } from "gatsby";
import React from "react";
import "../styles/components/post-link.scss";

export default function DeriverableLink({ work }) {
    const { title, image, technique } = work;
    const pageLink = `/works/${work.slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link">
                <div>
                    <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
                </div>
                <div className="post-link-text">
                    <h2>{title}</h2>
                    <p className="post-link-body">{technique}</p>
                </div>
            </div>
        </Link>
    )
}