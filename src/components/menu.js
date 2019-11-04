import React, { useRef, useEffect, useReducer } from "react"
import { Link, navigate } from "gatsby"
import BackIcon from "../assets/icons/back.svg"
import SmileyIcon from "../assets/icons/smiley.svg"
import { dashToSpace } from "../utils"

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_CURRENT_PAGE": {
			return {
				...state,
				page: {
					...state.page,
					current: action.current,
				},
			}
		}
		case "SET_LAST_HOVERED": {
			return {
				...state,
				page: {
					...state.page,
					lastHovered: action.lastHovered,
				},
			}
		}
		case "SET_MENU_FULLSCREEN": {
			return {
				...state,
				menu: {
					isFullscreen: action.isFullscreen,
				},
			}
		}
		case "SET_CIRCLE_FULLSCREEN": {
			return {
				...state,
				circle: {
					isFullscreen: action.isFullscreen,
				},
			}
		}
		default:
			throw new Error()
	}
}

const actions = {
	expandMenu: () => ({
		type: "SET_MENU_FULLSCREEN",
		isFullscreen: true,
	}),
	shrinkMenu: () => ({
		type: "SET_MENU_FULLSCREEN",
		isFullscreen: false,
	}),
	expandCircle: () => ({
		type: "SET_CIRCLE_FULLSCREEN",
		isFullscreen: true,
	}),
	shrinkCircle: () => ({
		type: "SET_CIRCLE_FULLSCREEN",
		isFullscreen: false,
	}),
	setCurrentPage: (currentPage) => ({
		type: "SET_CURRENT_PAGE",
		currentPage: currentPage,
	}),
	setLastHovered: (lastHovered) => ({
		type: "SET_LAST_HOVERED",
		lastHovered: lastHovered,
	}),
}

const initialState = {
	page: {
		current: "/",
		lastHovered: "/",
	},
	menu: {
		isFullscreen: true,
	},
	circle: {
		isFullscreen: false,
	},
}

const Menu = ({ pathname }) => {
	// Get page and sub-page relative to "/"
	const [, page, subPage] = [...pathname.split("/")]

	// State management
	const [state, dispatch] = useReducer(reducer, initialState)

	console.log(state)

	// Define elements
	const _menu = useRef(undefined)
	const _circle = useRef(undefined)
	const _smiley = useRef(undefined)

	const menuFullscreen = state.menu.isFullscreen
	const circleFullscreen = state.circle.isFullscreen
	const lastHovered = state.page.lastHovered

	/**
	 * Deactivate all menu links
	 */
	const deactivateLinks = () => {
		Array.from(document.querySelectorAll(".menu-link")).forEach(
			(link) => (link.dataset.active = false)
		)
	}

	/**
	 * Handle clicks on "things" menu item
	 */
	const handleThingsClick = (event) => {
		if (_smiley.current.hidden) {
			event.preventDefault()
		}
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
	const handleLinkMouseOver = (event) => {
		if (event.target.classList.contains("menu-link")) {
			dispatch(actions.setLastHovered(event.target.id))
			dispatch(actions.expandCircle())
		}
	}

	/**
	 * When user mouses out of the menu links container...
	 * - Shrink circle
	 */
	const handleLinkMouseOut = (event) => {
		if (menuFullscreen) {
			dispatch(actions.shrinkCircle())
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
		dispatch(actions.expandMenu())
		dispatch(actions.shrinkCircle())
		dispatch(actions.setLastHovered(""))
		deactivateLinks()
	}

	/**
	 * Force the menu to compact state
	 */
	const forceMenuCompact = (currentPage) => {
		dispatch(actions.shrinkMenu())
		dispatch(actions.expandCircle())
		dispatch(actions.setLastHovered(currentPage))
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
		<div
			className="menu"
			ref={_menu}
			data-circle-fullscreen={circleFullscreen}
			data-menu-fullscreen={menuFullscreen}
			data-last-hovered={lastHovered}
		>
			<div>
				{!menuFullscreen ? (
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
					<Link className="menu-link" id="about" to="/about">
						emily
					</Link>
					<Link className="menu-link" id="designs" to="/designs">
						{subPage ? dashToSpace(subPage) : "designs"}
					</Link>
					<a
						className="menu-link"
						onClick={handleThingsClick}
						id="things"
						href="https://dribbble.com/embuch"
						target="_blank"
						rel="noopener noreferrer"
					>
						things
						<div className="smiley-icon" ref={_smiley} hidden>
							<SmileyIcon />
						</div>
					</a>
				</div>
			</div>
			<div ref={_circle} className="circle" />
		</div>
	)
}

export default Menu
