import React from "react";
import axios from "axios";

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
    <div className="country-details">
      <div className="selected-country" key={countries[0].name}>
        <div className="flag">
          <img src={countries[0].flag} alt="" />
        </div>
        <h1 className="country-name">{countries[0].name}</h1>
        <div className="country-info">
          <span>Native name: {countries[0].nativeName}</span>
          <span>Population: {countries[0].population}</span>
          <span>Region: {countries[0].region}</span>
          <span>Sub region: {countries[0].subregion}</span>
          <span>Capital: {countries[0].capital}</span>
          <span>Top level domain: {countries[0].topLevelDomain}</span>
          {/* <span>Border countries: {countries[0].borders}</span>
          <span>Currencies: {countries[0].currencies}</span>
            <span>Languages: {countries[0].languages}</span> */}
        </div>
      </div>
    </div>
  );
}
