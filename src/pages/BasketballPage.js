import React from "react";
import BasketballList from "../components/Basketball-Comp/BasketballList";
import styled from "styled-components";
import { theme } from "../elements/darkButton";

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.secondaryColor};
  font-weight: bold;
  padding: 10px;
  padding-top: 50px;
  font-size: 20px;
  font-family: "Monaco";
  filter: ${(props) => props.theme.pink};
`;

const BasketballPage = () => {
  return (
    <div>
      <Title theme={theme["headerColor"]}>Basketball Courts</Title>
      <BasketballList />
    </div>
  );
};
export default BasketballPage;
