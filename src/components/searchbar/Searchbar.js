import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "../cards/Countries";

import "./Searchbar.css";

export default function SearchBar() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
        id="searchBar"
      />

      {filteredCountries.map((country, idx) => (
        <div>
          <CountryDetail key={idx} {...country} />
        </div>
      ))}
    </div>
  );
}

const CountryDetail = (props) => {
  const { name, flag } = props;

  return (
    <div>
      <p>
        <img src={flag} alt={name} style={{ width: "50px", height: "30px" }} />
      </p>
      <p>{name}</p>
    </div>
  );
};
