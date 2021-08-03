import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as headerStyles from "./header.module.scss"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={headerStyles.container}>
      <h1 style={{ margin: "auto" }}>{data.site.siteMetadata.title}</h1>
      <nav className={headerStyles.navContainer}>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/"
        >
          Home
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/about"
        >
          About
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/blog"
        >
          Blog
        </Link>
      </nav>
    </div>
  )
}

export default Header
