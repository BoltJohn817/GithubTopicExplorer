import React, { useContext } from "react";
import { SearchContext } from "../../store/SearchContext";
import { Wrapper, HeaderLabel, SearchInput } from "./Header.components";

const Header = () => {
  const { query, setQuery } = useContext(SearchContext);
  const handleSearch = (evt) => {
    setQuery(evt.target.value);
  };
  return (
    <Wrapper>
      <HeaderLabel>Github Topic Explorer</HeaderLabel>
      <SearchInput
        placeholder="Search with topic..."
        value={query}
        onChange={handleSearch}
      />
    </Wrapper>
  );
};

export default Header;
