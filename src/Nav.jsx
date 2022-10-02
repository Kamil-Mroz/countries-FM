import React from 'react'
import { IoMoonOutline } from 'react-icons/io5'

export const Nav = ({ changeLightMode }) => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a
            href="#"
            className="nav-link"
          >
            Where in the World?
          </a>
          <button
            onClick={changeLightMode}
            className="dark-mode"
          >
            <IoMoonOutline /> Dark Mode
          </button>
        </nav>
      </div>
    </header>
  )
}
