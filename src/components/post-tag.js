import { Link } from "gatsby";
import React from "react";
import TAG_IMG from "../images/tag.png";

export default function PostTag({ tag }) {

    return (
        <Link to={`/blog/tag/${tag.slug}/`} className="post-tag">
            <p>
                <img src={TAG_IMG} alt="" />{tag.title}</p>
        </Link>
    )
}