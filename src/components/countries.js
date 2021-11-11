import React from "react";
import axios from "axios";

// function getCountries() {
//   axios
//     .get(
//       "http://restcountries.eu/v2/all?access_key=c418fd3fb6dd321dd7bb1cf4e17c99c5",
//       {
//         timeout: 1000,
//       }
//     )
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
// }

axios
  .get("https://restcountries.com/v2/all", {
    timeout: 1000,
  })
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

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
    <div className="country">
      <div className="flag">
        <img src={countries[1].flag} alt="" />
      </div>
      <h1 className="country-name">{countries[1].name}</h1>
      <div className="country-info">
        <span>Population: {countries[1].population}</span>
        <span>Region: {countries[1].region}</span>
        <span>Capital: {countries[1].capital}</span>
      </div>
    </div>
  );
}
