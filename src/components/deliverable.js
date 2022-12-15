// src/components/work-link.js
import { Link } from "gatsby";
import React from "react";
import "../styles/components/post-link.scss";

export default function DeliverableLink({ work }) {
    const { title, image, technique } = work;
    const description = work.description.description;
    const pageLink = work.url;

    return (
        <Link to={pageLink} className="post-link-anchor" id={title} target="_blank" rel="noopener noreferrer">
            <div className="post-link">
                <div>
                    <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
                </div>
                <div className="post-link-text">
                    <h2>{title}</h2>
                    <p className="post-link-body">{technique}</p>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}