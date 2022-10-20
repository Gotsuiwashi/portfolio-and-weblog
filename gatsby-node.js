// gatsby-node.js
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
  query{
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
          description {
            childMarkdownRemark {
              html
          	}
          }
          slug
        }
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          image {
            file {
              url
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          description {
            description
          }
          slug
        }
      }
    }
  }`)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges: postEdges } = result.data.allContentfulPost
  const { edges: deliverableEdges } = result.data.allContentfulDeliverable

  postEdges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: { post: edge.node }
    })
  });

  deliverableEdges.forEach(edge => {
    createPage({
      path: `/works/${edge.node.slug}/`,
      component: path.resolve("./src/templates/work.js"),
      context: { work: edge.node }
    })
  });
}