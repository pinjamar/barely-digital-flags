import React from "react";
import Countries from "../components/cards/Countries";
import Find from "../components/searchbar/Searchbar";
import Dropdown from "../components/dropdown/Dropdown";

import "./Home.css";

function Home() {
  return (
    <div>
      <input
        id="searchbar"
        onkeyup="Find()"
        type="text"
        name="search"
        placeholder="Search for a country..."
      />
      <div style={{ width: 300 }}>
        <Dropdown countries={Countries} />
      </div>

      <div>
        <Countries />
      </div>
    </div>
  );
}

export default Home;
