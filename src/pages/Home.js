import React from "react";
import RegionFilter from "../components/dropdown/RegionFilter";
import Countries from "../components/cards/Countries";
import "./Home.css";

export default function Home(props) {
  const [search, setSearch] = React.useState("");
  const [filteredRegion, setFilteredRegion] =
    React.useState("Filter by region");

  const filterChangeHandler = (selectedRegion) => {
    setFilteredRegion(selectedRegion);
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

        <RegionFilter
          onClick={(option) => setFilteredRegion(option.target.value)}
          selected={filteredRegion}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      <div>
        <Countries search={search} />
      </div>
    </div>
  );
}
