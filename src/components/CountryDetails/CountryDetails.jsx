import React from 'react'
import { useParams } from 'react-router-dom'
// import { useState } from 'react'


const CountryDetails = ({ countries }) => {


    const { id } = useParams()

    countries.map((country) => {
        return country.alpha3Code === id
    })


    return (
        <>

        </>
    )
}

export default CountryDetails