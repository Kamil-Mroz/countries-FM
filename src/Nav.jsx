import React from 'react'
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5'

export const Nav = ({ changeLightMode, isDarkMode }) => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a
            href="/"
            className="nav-link"
          >
            Where in the world?
          </a>
          <button
            onClick={changeLightMode}
            className="dark-mode"
          >
            {isDarkMode ? <IoMoonSharp /> : <IoMoonOutline />} Dark Mode
          </button>
        </nav>
      </div>
    </header>
  )
}
