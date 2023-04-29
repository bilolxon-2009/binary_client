import React from 'react'

const Link = ({text, icon, link}) => {
  return (
    <Link to={link}>
      <span>{text}</span>
      {icon}
    </Link>
  )
}

export { Link };