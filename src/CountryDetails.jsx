import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IoArrowBackOutline } from 'react-icons/io5'
import axios from 'axios'
export const CountryDetails = () => {
  const [country, setCountry] = useState([])
  const [border, setBorder] = useState({})
  const { countryId } = useParams()
  const fetchData = async (id) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${id}`
    )
    const [data] = await res.data
    return data
  }

  useEffect(() => {
    fetchData(countryId).then((res) => setCountry(res))
  }, [])

  const navigate = useNavigate()
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <div className="container">
      <button
        onClick={() => navigate(-1)}
        className="btn"
      >
        <IoArrowBackOutline /> Back
      </button>
      {country && (
        <div className="detail-box">
          <img
            src={country?.flags?.svg}
            alt={country?.name?.common}
            className="flag"
          />
          <div className="detail-text">
            <h3>{country?.name?.common}</h3>
            <div className="grid">
              <p>
                <span>Native Name:</span>
                {country?.name?.nativeName &&
                  Object.values(country?.name?.nativeName)[0].official}
              </p>
              <p>
                <span>Top Level Domain:</span>
                {country?.tld?.join(' ')}
              </p>
              <p>
                <span>Population:</span>
                {country.population && numberWithCommas(country.population)}
              </p>
              <p>
                <span>Currencies:</span>
                {country.currencies &&
                  Object.values(country.currencies)
                    ?.map((cur) => cur.name)
                    .join(' ')}
              </p>
              <p>
                <span>Region:</span>
                {country.continents?.join(' ')}
              </p>
              <p>
                <span>Languages:</span>
                {country.languages &&
                  Object.values(country.languages).join(' ')}
              </p>
              <p>
                <span>Subregion:</span>
                {country.subregion && country.subregion}
              </p>
              <p>
                <span>Capital:</span>
                {country.capital?.join(' ')}
              </p>
            </div>
            <div className="borders">
              <span>borders:</span>
              {country.borders?.map((b) => {
                return (
                  <span
                    className="btn"
                    key={b}
                  >
                    {border?.name?.common}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
