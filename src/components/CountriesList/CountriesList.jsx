import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const CountriesList = (props) => {

    const { countries } = props


    return (
        <>
            <Outlet />

            <div className="col-5" style={{ maxheight: "90vh", overflow: "scroll" }}>
                <div className="list-group">

                    {countries.map((country) => {
                        return (


                            <NavLink key={country.name.common} className="list-group-item list-group-item-action" to={`${country.alpha3Code}`}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                                <h4>{country.name.common}</h4>
                            </NavLink>

                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default CountriesList