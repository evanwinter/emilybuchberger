const menuTypes = {
  EXPAND_MENU: "EXPAND_MENU",
  MINIMIZE_MENU: "MINIMIZE_MENU",
  EXPAND_CIRCLE: "EXPAND_CIRCLE",
  MINIMIZE_CIRCLE: "MINIMIZE_CIRCLE",
  SET_LAST_HOVERED: "SET_LAST_HOVERED",
}

export const menuInitialState = {
  lastHovered:       "",
  circleIsMinimized: true,
  menuIsMinimized:   false
}

export const menuReducer = (state, action) => {
  switch (action.type) {
    case menuTypes.SET_LAST_HOVERED:
      return { ...state, lastHovered: action.data }
    case menuTypes.EXPAND_CIRCLE:
      return { ...state, circleIsMinimized: false }
    case menuTypes.MINIMIZE_CIRCLE:
      return { ...state, circleIsMinimized: true }
    case menuTypes.EXPAND_MENU:
      return { ...state, menuIsMinimized: false }
    case menuTypes.MINIMIZE_MENU:
      return { ...state, menuIsMinimized: true }
    default:
      return state
  }
}

export const menuActions = {
  expandCircle:   () => ({ type: menuTypes.EXPAND_CIRCLE   }),
  minimizeCircle: () => ({ type: menuTypes.MINIMIZE_CIRCLE }),
  expandMenu:     () => ({ type: menuTypes.EXPAND_MENU     }),
  minimizeMenu:   () => ({ type: menuTypes.MINIMIZE_MENU   }),

  setLastHovered: (lastHovered) => ({
    type: menuTypes.SET_LAST_HOVERED,
    data: lastHovered
  }),
}