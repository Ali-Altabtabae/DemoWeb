import React from "react";
import styled from "styled-components";

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for a Field"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
