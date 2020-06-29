import * as React from "react";
import { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchinputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const resetInputField = () => {
    setSearchValue("");
  };
  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };
  return (
    <form className="search">
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
