import React from "react";
import FootballList from "../components/Football-Comp/FootballList"
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
const FootballPage = () => {
    return (
        <div>
          <Title theme={theme["headerColor"]}>Football Fields</Title>
          <FootballList />
        </div>
      );
}
export default FootballPage;