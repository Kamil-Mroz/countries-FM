import React, { useState } from 'react'
import { Body } from './Body'
import { Nav } from './Nav'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const changeLightMode = () => {
    setIsDarkMode((prevState) => !prevState)
  }
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Nav changeLightMode={changeLightMode} />
      <Body />
    </div>
  )
}

export default App
