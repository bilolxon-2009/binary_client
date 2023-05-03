import React from 'react'

const Link = ({ text, icon, link }) => {
  return (
    <Link className="btns" to={link}>
      <span>{text}</span>
      {icon}
    </Link>
  )
}

export { Link };