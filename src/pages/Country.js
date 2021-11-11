import React from "react";
import Countries from "../components/cards/Countries";
import Find from "../components/searchbar/Searchbar";
import Dropdown from "../components/dropdown/Dropdown";
import SelectedCountry from "../components/cards/SelectedCountry";

import "./Home.css";

export default function Country() {
  return (
    <div>
      <button onclick="">Back</button>

      <div>
        <SelectedCountry />
      </div>
    </div>
  );
}
