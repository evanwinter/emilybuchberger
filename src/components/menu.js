import React, { useState, useRef, useEffect } from "react"
import { Link, navigate } from "gatsby"
import GhostLinks from "./ghost-links"
import BackIcon from "../assets/icons/back.svg"

const onDesignsPage = () => {
	if (typeof window === "undefined") return

	const pathnames = window.location.pathname.split("/")

	if (pathnames.length > 2) {
		if (pathnames[1] === "designs") {
			return pathnames[2]
		}
	}

	return false
}

const format = (str) => {
	if (str.split("-").length > 1) {
		return str.split("-").join(" ")
	} else {
		return str
	}
}

const Menu = () => {
	const _menu = useRef(undefined)
	const [menuState, setMenuState] = useState("fullscreen")
	const shrinkMenu = () => setMenuState("compact")
	const expandMenu = () => setMenuState("fullscreen")

	const _circle = useRef(undefined)
	const [circleState, setCircleState] = useState("shrink")
	const shrinkCircle = () => setCircleState("shrink")
	const expandCircle = () => setCircleState("expand")

	const activateLink = link => (link.dataset.active = true)
	const deactivateLinks = () => {
		Array.from(document.querySelectorAll(".menu-link")).forEach(
			link => (link.dataset.active = false)
		)
	}

	const [hovering, setHovering] = useState(false)

	const _portfolio = useRef(undefined)

	const handleLinkClick = event => {
		shrinkMenu()
		activateLink(event.currentTarget)
	}

	const handleBackClick = event => {

		if (onDesignsPage()) {
			navigate("/designs")
			return
		} else {
			expandMenu()
			deactivateLinks()
			shrinkCircle()
			setHovering(false)
			navigate("/")
		}
	}

	const handleLinkMouseOver = event => {
		if (event.target.classList.contains("menu-link")) {
			expandCircle()
			setHovering(true)
			_menu.current.dataset.lastHovered = event.target.id
		}
	}

	const handleLinkMouseOut = event => {
		if (menuState === "fullscreen") {
			shrinkCircle()
			setHovering(false)
		}
	}

	useEffect(() => {
		if (onDesignsPage() && menuState !== "compact") {
			shrinkMenu()
			expandCircle()
			_menu.current.dataset.lastHovered = "portfolio"
			_portfolio.current.dataset.active = true
			setHovering(true)
		}
	}, [menuState])

	return (
		<div
			className="menu"
			ref={_menu}
			data-hovering={hovering}
			data-menu-state={menuState}
		>
			<div>
				{menuState !== "fullscreen" ? (
					<button className="back-button" onClick={handleBackClick}>
						<BackIcon />
					</button>
				) : (
					""
				)}
				<div
					className="menu-links"
					onMouseOver={handleLinkMouseOver}
					onMouseOut={handleLinkMouseOut}
				>
					<Link
						className="menu-link"
						onClick={handleLinkClick}
						id="about"
						to="/about"
					>
						emily
					</Link>
					<Link
						className="menu-link"
						onClick={handleLinkClick}
						ref={_portfolio}
						id="portfolio"
						to="/designs"
					>
						{onDesignsPage() ? (
							format(onDesignsPage())
						) : (
							"designs"
						)}
					</Link>
					<Link
						className="menu-link"
						onClick={handleLinkClick}
						id="other"
						to="/other"
					>
						things
					</Link>
				</div>
			</div>
			<div ref={_circle} className="circle" data-circle-state={circleState} />
		</div>
	)
}

export default Menu
