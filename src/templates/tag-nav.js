import React from "react";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import Seo from "../components/seo";

export default function TagNav({ pageContext }) {
    const tagTitle = pageContext.tag.title;
    const tagPosts = pageContext.tag.post
    return (
        <Layout>

            <Seo title={`${tagTitle}のページ`} description={`${tagTitle}ごとのページ`} />
            <div className="posts-wrapper">

                <h1>ジサクブログ</h1>
                <hr />
                <p>技術書やリファレンスについての雑文</p>
                {tagPosts.map(post =>
                    <PostLink post={post} />
                )}
            </div>
        </Layout>
    )
}