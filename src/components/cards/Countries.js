import React from "react";
import axios from "axios";

import "./Countries.css";

const baseURL = "https://restcountries.com/v2/all";

export default function Countries() {
  const [countries, setCountry] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountry(response.data);
    });
  }, []);

  if (!countries) return null;

  return (
    <div className="countries-grid">
      {countries.map((country) => (
        <div className="country" key={country.name}>
          <div className="flag">
            <img src={country.flag} alt="" />
          </div>
          <h1 className="country-name">{country.name}</h1>
          <div className="country-info">
            <span>Population: {country.population}</span>
            <span>Region: {country.region}</span>
            <span>Capital: {country.capital}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
