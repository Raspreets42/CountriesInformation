import React, { useState, useEffect } from 'react'
import '../App.css';

const Countries = () => {
    const [countries, setCountries] = useState([])

    const getCountryInfo = async () => {
        const response = await fetch('https://restcountries.eu/rest/v2/region/asia');
        const countries = await response.json();
        console.log(countries);
        setCountries(countries);
    }

    useEffect(() => {
        getCountryInfo();
    }, [])
    return (
        <>
            <div className="container text-center my-4">
                <h1 id="mainHeading">Countries Information</h1>
            </div>
            <div className="container" id="mainContainer">
                {
                    countries.map((country) => {
                        const { numericCode, name, population, region, subregion, capital, flag,languages, borders } = country
                        return (
                            <article key={numericCode}>
                                <div className="card" id="carding">
                                    <img src={flag} className="card-img-top" alt="Not Reachable" id="flaging" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <span id="mainSpan">Name : </span> {name} 
                                        </h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item details"> 
                                            <span className="spans">capital : </span> {capital} 
                                        </li>
                                        <li className="list-group-item details"> 
                                            <span className="spans">region : </span> {region} 
                                        </li>
                                        <li className="list-group-item details"> 
                                            <span className="spans">subregion : </span> {subregion} 
                                        </li>
                                        <li className="list-group-item details"> 
                                            <span className="spans">population : </span> {population} 
                                        </li>
                                        <li className="list-group-item details"> 
                                            <span className="spans">Borders : </span>
                                            {
                                                borders.map(bord => {
                                                    return(
                                                        <span>'{bord}' &nbsp; </span>    
                                                    )
                                                })
                                            } 
                                        </li>
                                        <li className="list-group-item details"> 
                                            <span className="spans">Language : </span>
                                        {
                                            languages.map(lang => {
                                                return(
                                                    <span> "{lang.name}"  </span>
                                                )
                                            })
                                        }
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Countries;