import { graphql } from "gatsby"
import React from "react"
import ContactForm from "../components/contact-form"
import DeliverableRedirection from "../components/deliv-link"
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
      <div className="messages-wrapper">
        <h2>ドンナサイト？</h2>
        <hr />
        <p>エンジニア(?)兼デザイナー(?)の<br></br>Gotsuiwashi(屋号)が制作した<br />ポートフォリオサイト。ブログ等のコンテンツも製作中。
        </p>
      </div>
      <div className="contents-wrapper">
        <h2>ツクッタモノ</h2>
        <hr />
        <p>制作に携わったウェブサイトやサービスの紹介</p>

        {data.allContentfulDeliverable.edges.map(edge =>
          <DeliverableRedirection key={edge.node.slug} work={edge.node} />
        )}
      </div>
      <div className="contents-wrapper">
        <h2>ジサクブログ</h2>
        <hr />
        <p>技術書やリファレンスについての雑文</p>
        {data.allContentfulPost.edges.map(edge =>
          <Postlink key={edge.node.slug} post={edge.node} />
        )}
      </div>
      <div className="messages-wrapper">
        <h2>オトイアワセ</h2>
        <hr />
        <p>お気軽にお問い合わせください</p>
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
            tags {
              title
              slug
            }
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
            description{
              description
            }
            url
          }
        }
      }
    }
`