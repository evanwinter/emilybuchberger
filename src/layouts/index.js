import React, { Fragment } from "react"
import Menu from "../components/menu"
import Transition from "../components/transition"

const Layout = ({ children, location }) => {
  return (
    <Fragment>
      <Menu />
      <Transition location = {location}>
        <main>{children}</main>
      </Transition>
    </Fragment>
  )
}

export default Layout
