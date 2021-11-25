import React from "react";

import "./RegionFilter.css";

export default function RegionFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="region-filter">
      <div className="region-filter__control">
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="antarctic-ocean">Antarctic Ocean</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          <option value="polar">Polar</option>
        </select>
      </div>
    </div>
  );
}
