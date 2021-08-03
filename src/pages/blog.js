import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import BlogPost from "../templates/BlogPost"
import * as blogStyles from "./blog.module.scss"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishDate, order: DESC }
        filter: { node_locale: { eq: "en-US" }, slug: { ne: null } }
      ) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "Do of MMMM , YYYY")
            body {
              raw
            }
            featuredImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulBlogPost.edges)
  return (
    <Layout title="Blog">
      <h1>Welcome to Blog Section</h1>
      <p>Once upon a time</p>
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((el, index) => (
          <li
            key={index}
            className={blogStyles.post}
            style={{
              backgroundImage: `url(${el.node.featuredImage.file.url})`,
              backgroundPosition: "right 0 bottom -200px",
              backgroundSize: "100%",
            }}
          >
            <Link to={`/blog/${el.node.slug}`}>
              <h2>{el.node.title}</h2>
              <p>{el.node.publishDate}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage
