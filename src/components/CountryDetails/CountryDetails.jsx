import React from 'react'
import { useParams } from 'react-router-dom'
// import { useState } from 'react'


const CountryDetails = ({ countries }) => {

    const id = useParams()
    const thisCountry = countries.find(country => country.alpha3Code === id.userId)


    return (
        <>

            <div className="col-7">
                <h1>{thisCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{thisCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {thisCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {thisCountry.borders.map((borderCountry) => {
                                        <li key={borderCountry}><a href={`/${borderCountry}`}>Andorra</a></li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CountryDetails