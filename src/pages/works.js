import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Worklink from "../components/work-link"

export default function Works({ data }) {
  return (
    <Layout>
      <Seo title="works" description="Gatsbyを使って作ったworks" />
      <div>Hello blogs</div>
      {data.allContentfulDeliverable.edges.map(edge =>
        <Worklink key={edge.node.slug} work={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
    query allContentfulDeliverable {
      allContentfulDeliverable {
        edges {
          node {
            title
            image {
              file {
                url
              }
            }
            technique
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            slug
          }
        }
      }
    }
`