import React from "react";
import Countries from "../components/cards/Countries";
import Find from "../components/searchbar/Searchbar";
import Dropdown from "../components/dropdown/Dropdown";
import SelectedCountry from "../components/cards/SelectedCountry";
import { Link } from "react-router-dom";

import "./Country.css";

export default function Country() {
  return (
    <div>
      <Link to="/" className="button-3">
        <i class="fas fa-arrow-left"></i>
        Back
      </Link>
      <div>
        <SelectedCountry />
      </div>
    </div>
  );
}
