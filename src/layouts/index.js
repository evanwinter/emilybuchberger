import React from "react"
import Menu from "@components/Menu"

const Layout = ({ children, location }) => {
  const [page, subPage] = location.pathname.substr(1).split("/")
  return (
    <div className="layout" data-page={`${subPage || page}`}>
      <Menu />
      <div className="spacer"></div>
      <div className="content">
        <div className="container">{children}</div>
      </div>
    </div>
  )
}

export default Layout
