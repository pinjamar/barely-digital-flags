import React from "react";
import axios from "axios";

import "./SelectedCountry.css";

axios
  .get("https://restcountries.com/v2/all", {
    timeout: 1000,
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const baseURL = "https://restcountries.com/v2/all";

export default function SelectedCountry() {
  const [countries, setCountry] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountry(response.data);
    });
  }, []);

  if (!countries) return null;

  return (
    <div className="selected-country" key={countries[0].name}>
      <div className="flag">
        <img src={countries[0].flag} alt="" />
      </div>
      <div className="country-details">
        <h1 className="country-name">{countries[0].name}</h1>
        <div className="country-info">
          <div className="country-basic-info">
            <span>Native name: {countries[0].nativeName}</span>
            <span>Population: {countries[0].population}</span>
            <span>Region: {countries[0].region}</span>
            <span>Sub region: {countries[0].subregion}</span>
            <span>Capital: {countries[0].capital}</span>
          </div>
          <div>
            <span>Top level domain: {countries[0].topLevelDomain}</span>

            {/* {
              countries.map((country) => {
                const { currencies } = country;
                const { code, name, symbol } = currencies || {};
                return <div>code: {`${code}, ${name}, ${symbol}`}</div>;
              })[0]
            } */}

            {
              countries.map((country) => {
                const { languages } = country;
                const { name } = languages;
                return (
                  <div>
                    <span> {`Languages: ${name}`}</span>
                  </div>
                );
              })[0]
            }
            {
              countries.map((country) => {
                if (country.borders) {
                  return <div>{country.borders}</div>;
                } else {
                  return <div>No borders</div>;
                }
              })[0]
            }
          </div>
        </div>
      </div>
    </div>
  );
}
