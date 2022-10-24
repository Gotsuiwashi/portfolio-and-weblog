import { graphql } from "gatsby"
import React from "react"
import ContactForm from "../components/contact-form"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Postlink from "../components/post-link"
import Seo from "../components/seo"
import "../styles/pages/index.scss"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="Dev Blog" description="Gatsbyブログ" />
      <Hero></Hero>
      <div className="contents-wrapper"></div>
      <div className="contents-wrapper">{/*
        {data.allContentfulDeliverable.edges.map(edge =>
          <DeriverableLink key={edge.node.slug} work={edge.node} />
        )}*/}
      </div>
      <div>Hello blogs</div>
      <div className="contents-wrapper">
        {data.allContentfulPost.edges.map(edge =>
          <Postlink key={edge.node.slug} post={edge.node} />
        )}
      </div>
      <div className="contents-wrapper">
        <ContactForm></ContactForm>
      </div>
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