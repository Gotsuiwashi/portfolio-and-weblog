import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Postlink from "../components/post-link"
import Seo from "../components/seo"

export default function Blog({ data }) {
  return (
    <Layout>
      <Seo title="Main Blog" description="Gatsbyを使って作ったMainブログです" />
      <div>Hello blogs</div>
      {data.allContentfulPost.edges.map(edge =>
        <Postlink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
    query allContentfulPost {
      allContentfulPost {
        edges {
          node {
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
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
`