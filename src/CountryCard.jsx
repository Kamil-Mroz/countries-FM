import React from 'react'

export const CountryCard = ({ country }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <div className="card">
      <div className="flag-box">
        <img
          src={country.flags.svg}
          alt={country.name.common}
        />
      </div>
      <div className="detail">
        <h3>{country.name.common}</h3>
        <div>
          <span>Population: </span>
          {numberWithCommas(country.population)}
        </div>
        <div>
          <span>Region: </span>
          {country.continents?.join(' ')}
        </div>
        <div>
          <span>Capital: </span>
          {country.capital?.join(' ')}
        </div>
      </div>
    </div>
  )
}
