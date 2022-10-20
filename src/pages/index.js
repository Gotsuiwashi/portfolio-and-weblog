import { graphql } from "gatsby"
import React from "react"
import ContactForm from "../components/contact-form"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Postlink from "../components/post-link"
import Seo from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="Dev Blog" description="Gatsbyを使って作ったブログです" />
      <Hero></Hero>
      <div>Hello blogs</div>
      {data.allContentfulPost.edges.map(edge =>
        <Postlink key={edge.node.slug} post={edge.node} />
      )}
      <ContactForm></ContactForm>
    </Layout>
  )
}

export const query = graphql`
    query  {
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