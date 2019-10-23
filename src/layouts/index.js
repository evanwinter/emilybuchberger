import React from "react"
import Menu from "../components/menu"
import Transition from "../components/transition"

const Layout = ({ children, location }) => {
	return (
		<div className="layout">
			<Menu pathname={location.pathname} />
			<Transition location={location}>
				<main>{children}</main>
			</Transition>
		</div>
	)
}

export default Layout
