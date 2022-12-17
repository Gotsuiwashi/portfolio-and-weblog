import { graphql } from "gatsby"
import React from "react"
import DeliverableLink from "../components/deliverable"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Works({ data }) {
  return (
    <Layout>
      <Seo title="works" description="今までの制作物" />
      <div className="deliverables-wrapper">
        <h1>ツクッタモノ</h1>
        <hr />
        <p>制作に携わったウェブサイトやサービスの紹介</p>
        {data.allContentfulDeliverable.edges.map(edge =>
          <DeliverableLink key={edge.node.slug} work={edge.node} />
        )}
      </div>
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
            description{
              description
            }
            url
          }
        }
      }
    }
`