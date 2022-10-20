// src/components/work-link.js
import { Link } from "gatsby";
import React from "react";

export default function WorkLink({ work }) {
    const { title, updatedAt, image, technique } = work;
    const pageLink = `/works/${work.slug}/`

    return (
        <Link to={pageLink} className="work-link-anchor">
            <div className="work-link">
                <div>
                    <img src={image.file.url} className="work-link-image" alt="work-cover"></img>
                </div>
                <div className="work-link-text">
                    <h2>{title}</h2>
                    <p className="work-link-body">{technique}</p>
                    <p className="work-link-date">{updatedAt}</p>
                </div>
            </div>
        </Link>
    )
}