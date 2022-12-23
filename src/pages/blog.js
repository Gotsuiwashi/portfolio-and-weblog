import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Postlink from "../components/post-link"
import Seo from "../components/seo"

export default function Blog({ data }) {
  return (
    <Layout>

      <Seo title="Gatsby Blog" description="Gatsbyで作ったブログです" />
      <div className="posts-wrapper">

        <h1>ジサクブログ</h1>
        <hr />
        <p>技術書やリファレンスについての雑文</p>
        {data.allContentfulPost.edges.map(edge =>
          <Postlink key={edge.node.slug} post={edge.node} />
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
    query allContentfulPost {
      allContentfulPost(sort: {order: DESC, fields: updatedAt}) {
        edges {
          node {
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            title
            image {
              title
              file {
                url
              }
            }
            description {
              description
            }
            slug
            tags {
              title
              slug
            }
          }
        }
      }
    }
`