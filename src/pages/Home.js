import React from "react";
import Countries from "../components/cards/Countries";
import Dropdown from "../components/dropdown/Dropdown";

import "./Home.css";

function Home() {
  const [search, setSearch] = React.useState("");
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
          <Dropdown />
        </div>
      </div>
      <div>
        <Countries search={search} />
      </div>
    </div>
  );
}

export default Home;
