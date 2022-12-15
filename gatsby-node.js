// gatsby-node.js
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
  query{
    allContentfulPost {
      edges {
        node {
          slug
          title
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
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
          description {
            description
          }
          tags{
            title
            slug
          }
        }
      }
    }
    allContentfulTags {
      edges {
        node {
          slug
          title
          post {
            slug
            title
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            image {
              file {
                url
              }
            }
            description {
              description
            }
            tags{
              slug
              title
            }
          }
        }
      }
    }
  }`)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //const { edges: deliverableEdges } = result.data.allContentfulDeliverable
  const { edges: postEdges } = result.data.allContentfulPost;
  const { edges: tagsEdges } = result.data.allContentfulTags;

  postEdges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: { post: edge.node }
    })
  });

  tagsEdges.forEach(edge => {
    createPage({
      path: `/blog/tag/${edge.node.slug}/`,
      component: path.resolve("./src/templates/tag-nav.js"),
      context: { tag: edge.node }
    })
  });


  /*
  const tags = [];
  postEdges.forEach(edge => {
    tags.concat(edge.node.tag);
  })
  //const setOfTags = new Set(tags);

  tags.forEach(tag => {
    createPage({
      path: `/blog/${tag}/`,
      component: path.resolve("./src/templates/tag-nav.js"),
      context: {}
    })
  });
  これで用意しても二度クエリを入手出来ないので失敗
  */

  /* タグを新しい配列に詰める、これは直下の配列の結合しかできないので失敗
    const tags = postEdges.reduce(
      (tagArray, nextTags) => {
        tagArray.concat(nextTags)
      }, []
    );
  */
  /*
  postEdges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.tag[1]}/`,
      component: path.resolve("./src/templates/tag-nav.js"),
      context: { post: edge.node }
    })
  });*/
  //テンプレートを適当に作って表示させる
  //edge.node.tagの中にtagがあるのでそれをパスとしてページ生成すればいい。

}