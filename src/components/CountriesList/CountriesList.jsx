import React from 'react'
import { NavLink } from 'react-router-dom'
import './CountriesList.css'

const CountriesList = (props) => {

    const { countries, setCountries } = props
    // console.log(countries[0].name.official)



    return (
        <ul className='countriesList'>
            {countries.map((country) => {
                return (
                    <li key={country.name.official} className="each-li">
                        <NavLink to={`countries/${country.alpha3Code}`}>{country.name.common}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default CountriesList