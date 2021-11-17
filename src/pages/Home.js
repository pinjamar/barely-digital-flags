import React from "react";
import Countries from "../components/cards/Countries";
import SearchBar from "../components/searchbar/Searchbar";
import Dropdown from "../components/dropdown/Dropdown";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="search-and-filter">
        <SearchBar />
        <div style={{ width: 300 }}>
          <Dropdown countries={Countries} />
        </div>
      </div>
      <div>
        <Countries />
      </div>
    </div>
  );
}

export default Home;
