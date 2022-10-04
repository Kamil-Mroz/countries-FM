import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const CountryDetails = () => {
  const navigate = useNavigate()
  const { countryCode } = useParams()
  console.log(countryCode)
  return <button onClick={() => navigate(-1)}>Ok</button>
}
