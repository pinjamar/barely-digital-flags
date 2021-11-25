import React from "react";

import "./Countries.css";

export default function Countries(props) {
  const { search, filtered, countries, onCountrySelected } = props;

  var filteredCountries = countries;

  if (filtered) {
    filteredCountries = countries.filter((country) => {
      return country.region.includes(filtered);
    });
  }

  if (search) {
    filteredCountries = filteredCountries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  const countrySelector = (countryName) => {
    onCountrySelected(countryName);
  };

  return (
    <div className="countries-grid">
      {filteredCountries.map((country) => (
        <div
          onClick={(e) => {
            countrySelector(country.name);
          }}
          className="country"
          key={country.name}
        >
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
