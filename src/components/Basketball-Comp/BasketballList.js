import React, { useState } from "react";
import { basketball } from "../../elements/elements";
import BasketballItem from "./BasketballItem";
import styled from "styled-components";
import SearchBar from "../SearchBar";

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const BasketballList = () => {
  const [query, setQuery] = useState("");

  const basketballlist = basketball
    .filter((field) => field.name.includes(query))
    .map((x) => <BasketballItem basketball={x} key={x.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{basketballlist}</ListWrapper>
    </>
  );
};

export default BasketballList;
