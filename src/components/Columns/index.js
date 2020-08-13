import React from "react"
import "./styles.scss"

const Columns = ({ children, gap, padding }) => {
  const classNames = []
  if (children) { classNames.push(`columns-${children.length}`)}
  if (gap)      { classNames.push("gap") }
  if (padding)  { classNames.push("padded") }
  return (
    <div className={`columns ${classNames.join(" ")}`}>
      {children.map((child, i) => (
        <div key={`column-${i + 1}`} className={`column column-${i + 1}`}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default Columns
