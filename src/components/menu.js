import React, { useState, useRef, useEffect } from "react"
import { Link, navigate } from "gatsby"
import BackIcon from "../assets/icons/back.svg"
import SmileyIcon from "../assets/icons/smiley.svg"
import { dashToSpace } from "../utils"

const BackButton = ({ handleBackClick }) => {
	return (
		<button className="back-button" onClick={handleBackClick}>
			<BackIcon />
		</button>
	)
}

const Menu = ({ pathname }) => {

	// Get page and sub-page relative to "/"
	const [, page, subPage] = [...pathname.split("/")]

	const _menu = useRef(undefined)
	const _circle = useRef(undefined)
	const _smiley = useRef(undefined)

	const [menuFullscreen, setMenuFullscreen] = useState(true)
	const [circleFullscreen, setCircleFullscreen] = useState(false)

	const deactivateLinks = () => {
		Array.from(document.querySelectorAll(".menu-link")).forEach(
			link => (link.dataset.active = false)
		)
	}

	/**
	 * When user clicks a menu link...
	 * - Shrink the menu
	 * - Activate the link
	 */
	const handleLinkClick = event => {
		setMenuFullscreen(false)
		event.currentTarget.dataset.active = true
	}

	const handleThingsClick = event => {
		_smiley.current.hidden = !_smiley.current.hidden
	}

	/**
	 * When user clicks the back arrow...
	 * - If on a design project page, just step back to designs
	 * - Else, go back to the index page and force the menu to fullscreen
	 */
	const handleBackClick = () => {
		if (subPage) {
			navigate("/designs")
			return
		} else {
			forceMenuFullscreen()
			navigate("/")
		}
	}

	/**
	 * When user mouses over a menu link...
	 * - Expand circle
	 * - Mark the link as the menu's "last hovered" link
	 * 	 (which sets the circle color)
	 */
	const handleLinkMouseOver = event => {
		if (event.target.classList.contains("menu-link")) {
			setCircleFullscreen(true)
			_menu.current.dataset.lastHovered = event.target.id
		}
	}

	/**
	 * When user mouses out of the menu links container...
	 * - Shrink circle
	 */
	const handleLinkMouseOut = event => {
		if (menuFullscreen) {
			setCircleFullscreen(false)
		}
	}

	/**
	 * Force the menu to fullscreen state
	 * - Expand menu
	 * - Shrink circle
	 * - Unset "last hovered"
	 * - Unset
	 */
	const forceMenuFullscreen = () => {
		setMenuFullscreen(true)
		setCircleFullscreen(false)
		_menu.current.dataset.lastHovered = ""
		deactivateLinks()
	}

	/**
	 * Force the menu to compact state
	 */
	const forceMenuCompact = (currentPage) => {
		setMenuFullscreen(false)
		setCircleFullscreen(true)
		_menu.current.dataset.lastHovered = currentPage
		const link = document.querySelector(`#${currentPage}`)
		if (link) {
			link.dataset.active = true
		}
	}

	/**
	 * When path changes, check if we're on the index page.
	 * If so, reset the menu to initial state.
	 * Catches browser 'back' actions
	 */
	useEffect(() => {
		if (!page && !menuFullscreen) {
			forceMenuFullscreen()
		}

		if (page && menuFullscreen) {
			forceMenuCompact(page)
		}

	}, [pathname])

	return (
		<div className="menu" ref={_menu} data-circle-fullscreen={circleFullscreen} data-menu-fullscreen={menuFullscreen}>
			<div>
				{!menuFullscreen ? <BackButton handleBackClick={handleBackClick} /> : ""}
				<div className="menu-links" onMouseOver={handleLinkMouseOver} onMouseOut={handleLinkMouseOut}>
					<Link className="menu-link" onClick={handleLinkClick} id="about" to="/about">
						emily
					</Link>
					<Link className="menu-link" onClick={handleLinkClick} id="designs" to="/designs">
						{subPage ? dashToSpace(subPage) : "designs"}
					</Link>
					<Link className="menu-link" onClick={handleThingsClick} id="things" to="/">
						things
						<div className="smiley-icon" ref={_smiley} disabled>
							<SmileyIcon />
						</div>
					</Link>
				</div>
			</div>
			<div ref={_circle} className="circle" />
		</div>
	)
}

export default Menu
