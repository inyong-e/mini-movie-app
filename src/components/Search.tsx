import * as React from "react";
import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchinputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <form className="search-form">
      <input
        value={searchValue}
        onChange={onChangeSearchinputChanges}
        type="text"
      />
      <input onClick={onSearch} type="submit" value="Search!" />
    </form>
  );
};

export default Search;
