import React from "react"

export const Columns = ({ children }) => {
  return (
    <div className={`grid grid-${children.length}`}>
      {children.map((child, i) => (
        <div className={`grid-item grid-item-${i + 1}`}>{child}</div>
      ))}
    </div>
  )
}
