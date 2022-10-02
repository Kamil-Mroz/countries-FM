import React, { useState } from 'react'
import { Nav } from './Nav'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const changeLightMode = () => {
    setIsDarkMode((prevState) => !prevState)
  }
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Nav changeLightMode={changeLightMode} />
    </div>
  )
}

export default App
