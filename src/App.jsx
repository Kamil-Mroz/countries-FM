import React, { useState } from 'react'
import { Body } from './Body'
import { Nav } from './Nav'
import { Routes, Route } from 'react-router-dom'
import { CountryDetails } from './CountryDetails'
import { Footer } from './Footer'
import { NotFound } from './NotFound'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const changeLightMode = () => {
    setIsDarkMode((prevState) => !prevState)
  }
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Nav
        changeLightMode={changeLightMode}
        isDarkMode={isDarkMode}
      />
      <Routes>
        <Route
          path="/"
          element={<Body />}
        ></Route>
        <Route
          path="/country-details/:countryId"
          element={<CountryDetails />}
        />
        <Route
          path="/*"
          element={<NotFound text="Page not found" />}
        />
      </Routes>
      <Footer />
    </div>
  )
}
// ! page not found
// ! result not found
export default App
