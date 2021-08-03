import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"
import Head from "./head"
const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <Head title={props.title} />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
