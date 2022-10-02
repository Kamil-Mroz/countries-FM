import React from 'react'
import { IoMoonOutline } from 'react-icons/io5'

export const Nav = ({ changeLightMode }) => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <a
            href="#"
            className="nav-link"
          >
            Where in the World?
          </a>
          <div
            onClick={changeLightMode}
            className="dark-mode"
          >
            <IoMoonOutline /> Dark Mode
          </div>
        </div>
      </div>
    </nav>
  )
}
