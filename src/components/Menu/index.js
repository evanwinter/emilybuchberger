import React, { useEffect, useReducer } from "react"
import anime from "animejs"
import { Link } from "gatsby"
import BackIcon from "@icons/back.svg"
import { menuActions, menuInitialState, menuReducer } from "./state"

// TODO Ideally check this on resize
const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768 

const animeOptions = { targets: "#circle", duration: 500, easing: "easeInOutQuad" }

const Menu = () => {
  const [state, dispatch] = useReducer(menuReducer, menuInitialState)

  /* TODO Detect where we're at, to see if we want to return to menu or go back to the portfolio 
     landing page, for example */
  const isHomePage = true

  /* Handle clicks of main menu items */
  const handleClick = () =>  {
    dispatch(menuActions.minimizeCircle())
    dispatch(menuActions.minimizeMenu())
  }
  
  /* Handle clicks of the custom back button */
  const handleBackClick = () => {
    if (isHomePage) {
      dispatch(menuActions.expandMenu())
      dispatch(menuActions.minimizeCircle())
    }
    window.history.back()
  }

  /* Update the last hovered menu item, which sets the circle's color */
  const setLastHovered = (event) => dispatch(menuActions.setLastHovered(event.currentTarget.id))
  
  const handleMouseEnter = () => !state.menuIsMinimized &&
                                 dispatch(menuActions.expandCircle())

  const handleMouseLeave = () => !state.menuIsMinimized &&
                                 dispatch(menuActions.minimizeCircle())

  /* On browser 'back' actions, check if we need to update menu state */
  useEffect(() => {
    console.log("Running")

    window.onpopstate = () => {
      isHomePage && dispatch(menuActions.expandMenu())
    }

    if (window.location.pathname === "/") {
      dispatch(menuActions.expandMenu())
    } else {
      dispatch(menuActions.minimizeMenu())
    }
  }, [])
  
  /* Animates the circle (expand/shrink) */
  const expandCircle = () => anime({ scale: isMobile() ? 10 : 20, ...animeOptions })
  const shrinkCircle = () => anime({ scale: 1,                    ...animeOptions })
  useEffect(() => {
    if (!state.circleIsMinimized) {
      expandCircle()
    } else {
      shrinkCircle()
    }
  }, [state.circleIsMinimized])

  return (
    <div className="menu">
      <div className="menu-wrapper" data-is-minimized={state.menuIsMinimized}>
        <nav class="site-nav" onClick={handleClick} onMouseEnter={handleMouseEnter} 
             data-last-hovered={state.lastHovered}  onMouseLeave={handleMouseLeave}>
          
          <a id="back-link" onClick={handleBackClick}>
            <BackIcon />
          </a>

          <Link id="about" to="/about"
                className="site-nav-link" 
                activeClassName="active"
                onMouseEnter={setLastHovered}>
                  emily
          </Link>
          
          <Link id="portfolio" to="/portfolio"
                className="site-nav-link" 
                activeClassName="active"
                onMouseEnter={setLastHovered}>
                  designs
          </Link>

          <Link id="things" to="/things"
                className="site-nav-link" 
                activeClassName="active"
                onMouseEnter={setLastHovered}>
                  things
          </Link>

          <div id="circle"></div>
        </nav>
      </div>
    </div>
  )
}

export default Menu
