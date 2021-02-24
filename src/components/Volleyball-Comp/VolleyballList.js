import React, { useState } from "react";
import { volleyball } from "../../elements/elements";
import VolleyballItem from "./VolleyballItem";
import styled from "styled-components";
import SearchBar from "../SearchBar";

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const VolleyballList = () => {
  const [query, setQuery] = useState("");

  const volleyballlist = volleyball
    .filter((field) => field.name.includes(query))
    .map((x) => <VolleyballItem volleyball={x} key={x.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{volleyballlist}</ListWrapper>
    </>
  );
};

export default VolleyballList;
