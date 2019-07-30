import React, { useState, useRef, useEffect } from "react"
import { Link, navigate } from "gatsby"
import BackIcon from "../assets/icons/back.svg"
import { dashToSpace } from "../utils"

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

const Menu = () => {
	const _menu = useRef(undefined)
	const _portfolio = useRef(undefined)
	const _circle = useRef(undefined)
	
	const [menuState, setMenuState] = useState("fullscreen")
	const shrinkMenu = () => setMenuState("compact")
	const expandMenu = () => setMenuState("fullscreen")

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

	/**
	 * When user clicks a menu link...
	 * - Set menu to "compact"
	 * - Mark the clicked link as `data-active`
	 */
	const handleLinkClick = event => {
		shrinkMenu()
		activateLink(event.currentTarget)
	}

	/**
	 * When user clicks the back arrow...
	 * - If on a portfolio page, go back to portfolio index page and keep menu compact
	 * - Else, reset menu to initial state and go back to the index page
	 */
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

	/**
	 * When user hovers over a menu link...
	 * - Expand circle
	 * - Set `data-hovering` to true
	 * - Set `data-last-hovered`
	 */
	const handleLinkMouseOver = event => {
		if (event.target.classList.contains("menu-link")) {
			expandCircle()
			setHovering(true)
			_menu.current.dataset.lastHovered = event.target.id
		}
	}

	/**
	 * When user mouses out of the menu links container...
	 * - Shrink circle
	 * - Set `data-hovering` to false
	 */
	const handleLinkMouseOut = event => {
		if (menuState === "fullscreen") {
			shrinkCircle()
			setHovering(false)
		}
	}

	/**
	 * Each time `menuState` is changed (compacts or expands), 
	 * check if we need to force the menu to go compact. 
	 *
	 * This happens on first visits to portfolio pages because they're
	 * not recognized as internal links, causing a reload (and a menu state
	 * reset). This forces the menu to shrink again if it was inadvertantly reset.
	 */
	useEffect(() => {
		// If we're on a portfolio page and menu state isn't "compact", shrink it
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
							dashToSpace(onDesignsPage())
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
