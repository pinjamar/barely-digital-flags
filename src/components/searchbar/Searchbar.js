import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import axios from "axios";
import Countries from "../cards/Countries";

import "./Searchbar.css";

export default function SearchBar() {
  const [countries, setCountries] = useState([]);
=======
import ReactDOM from "react-dom";
import axios from "axios";
import "./Searchbar.css";

function Find() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
>>>>>>> c451c50e095f9856de776cf7c3b8139f45b91e6f
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
=======
    setLoading(true);
>>>>>>> c451c50e095f9856de776cf7c3b8139f45b91e6f
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
<<<<<<< HEAD
=======
        setLoading(false);
>>>>>>> c451c50e095f9856de776cf7c3b8139f45b91e6f
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

<<<<<<< HEAD
  return (
    <div className="search-wrapper">
=======
  if (loading) {
    return <p>Loading countries...</p>;
  }

  return (
    <div className="searchbar">
      <h1>Countries Lists</h1>
>>>>>>> c451c50e095f9856de776cf7c3b8139f45b91e6f
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
<<<<<<< HEAD
        id="searchBar"
      />

      {filteredCountries.map((country, idx) => (
        <div>
          <CountryDetail key={idx} {...country} />
        </div>
=======
      />
      {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
>>>>>>> c451c50e095f9856de776cf7c3b8139f45b91e6f
      ))}
    </div>
  );
}

const CountryDetail = (props) => {
  const { name, flag } = props;

  return (
<<<<<<< HEAD
    <div>
      <p>
        <img src={flag} alt={name} style={{ width: "50px", height: "30px" }} />
      </p>
      <p>{name}</p>
    </div>
  );
};
=======
    <>
      <p>
        <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
      </p>
      <p>{name}</p>
    </>
  );
};

export default Find;
>>>>>>> c451c50e095f9856de776cf7c3b8139f45b91e6f
