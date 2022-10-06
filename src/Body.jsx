import React, { useEffect, useState, useRef } from 'react'
import { IoSearch } from 'react-icons/io5'
import axios from 'axios'
import { CountryCard } from './CountryCard'
import { NavLink } from 'react-router-dom'
import { NotFound } from './NotFound'
export const Body = () => {
  const [countries, setCountries] = useState([])
  const [countrySort, setCountrySort] = useState([])
  const inputRef = useRef(null)
  const selectRef = useRef(null)
  const URL_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all'

  const fetchData = async (url, action) => {
    const res = await axios.get(url)
    const data = await res.data
    action(data)
    setCountrySort(data)
  }
  const handleOnChange = (e) => {
    inputRef.current.value = ''
    const value = e.target.value
    if (!value) return setCountrySort(countries)
    const sort = countries?.reduce((acc, c) => {
      if (c?.continents?.join('').toLowerCase().includes(value.toLowerCase()))
        acc.push(c)
      return acc
    }, [])
    setCountrySort(sort)
  }

  const inputChange = (e) => {
    selectRef.current.value = ''

    const value = e.target.value
    if (!value) return setCountrySort(countries)

    const sort = countries?.reduce((acc, c) => {
      if (c?.name?.common?.toLowerCase().includes(value.toLowerCase()))
        acc.push(c)
      return acc
    }, [])
    setCountrySort(sort)
  }
  console.log(countrySort)
  useEffect(() => {
    fetchData(URL_ALL_COUNTRIES, setCountries)
  }, [])

  return (
    <main>
      <div className="container">
        <div className="input-box">
          <div className="input-group">
            <IoSearch
              className="icon-search"
              onClick={() => inputRef.current.focus()}
            />
            <input
              type="search"
              name=""
              id=""
              className="input-search"
              placeholder="Search for a country..."
              ref={inputRef}
              onChange={inputChange}
            />
          </div>
          <select
            name="continents"
            id="continents"
            className="drop-down"
            onChange={handleOnChange}
            ref={selectRef}
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="north america">North America</option>
            <option value="south america">South America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        {countrySort?.length > 0 ? (
          <div className="countries-container">
            {countrySort?.map((country) => (
              <NavLink
                to={`/country-details/${country.cca2}`}
                key={country.name.common}
                borders={countries.filter((c) =>
                  country.borders?.join(' ').includes(c.cca2)
                )}
                style={{ textDecoration: 'none' }}
              >
                <CountryCard country={country} />
              </NavLink>
            ))}
          </div>
        ) : (
          <NotFound text="Country not found" />
        )}
      </div>
    </main>
  )
}
