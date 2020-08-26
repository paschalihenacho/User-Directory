import React, { useContext } from "react";
import "./SearchName.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group">
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="enter a name to search"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search Name
            </span>
          </div>
        </div>
    </div>
  );
}
export default SearchName;
