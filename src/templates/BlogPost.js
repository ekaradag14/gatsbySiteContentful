import React from "react"
import parse from "html-react-parser"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
export const query = graphql`
  query ($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
`
const BlogPost = props => {
  console.log(props.data.contentfulBlogPost.title)
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <img
        src={props.data.contentfulBlogPost.featuredImage.file.url}
        style={{
          width: "100%",
          height: "350px",
          alignSelf: "center",
          objectFit: "cover",
          objectPosition: "20% 70%" /* try 20px 10px */,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(
            JSON.parse(props.data.contentfulBlogPost.body.raw)
          ),
        }}
      />
      <p>{props.data.contentfulBlogPost.publishDate}</p>
    </Layout>
  )
}

export default BlogPost
