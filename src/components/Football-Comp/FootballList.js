import React, { useState } from "react";
import { football } from "../../elements/elements";
import FootballItem from "./FootballItem";
import styled from "styled-components";
import SearchBar from "../SearchBar";

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const FootballList = () => {
  const [query, setQuery] = useState("");

  const footballlist = football
    .filter((field) => field.name.includes(query))
    .map((field) => <FootballItem football={field} key={field.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{footballlist}</ListWrapper>
    </>
  );
};

export default FootballList;
