import React from "react";
import axios from "axios";

import "./Dropdown.css";

const baseURL = "https://restcountries.com/v2/all";

export default function Dropdown() {
  const [countries, setCountry] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountry(response.data);
    });
  }, []);

  if (!countries) return null;
  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value"></div>
        <div className="arrow"></div>
      </div>
      <div className="options">
        {countries.map((country) => (
          <div className="option">{country.region}</div>
        ))}
      </div>
    </div>
  );
}
