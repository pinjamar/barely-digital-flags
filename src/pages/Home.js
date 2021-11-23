import React from "react";
import Countries from "../components/cards/Countries";

import "./Home.css";

function Home() {
  const [search, setSearch] = React.useState("");

  const RegionFilter = () => {
    return (
      <div className="region-filter">
        <div className="region-filter__control">
          <select value="aaaa">
            <option value="initial">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="antarctic-ocean">AntAntarctic Ocean</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="polar">Polar</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="search-and-filter">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search Countries"
            onChange={(e) => setSearch(e.target.value)}
            id="searchBar"
          />
        </div>
        <div style={{ width: 300 }}>
          <RegionFilter />
        </div>
      </div>
      <div>
        <Countries search={search} />
      </div>
    </div>
  );
}

export default Home;
