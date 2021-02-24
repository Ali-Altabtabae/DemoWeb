import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../elements/darkButton";

//
const Button = styled.button`
  background-color: #008000;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  float: left;
  border: 1px solid green;
  cursor: pointer;

  &:hover {
    background-color: white; /* Green */
    color: black;
  }
`;

const NavbarRow = styled.div`
  display: flex;
  height: 50px;
  width: 100vw;
  background-color: ${(props) => props.theme.z};
  justify-content: space-between;
`;

const Navbar = (props) => {
  const [currentX, setX] = useState("opt1");

  const toggleX = (para) => {
    if (para === "Football") {
      setX("opt2");
    } else {
      setX("opt1");
    }
  };

  const alertM = (para) => {
    if (para === "Football") alert("Come On");
    else alert("Hi");
  };

  return (
      <Button
        onClick={() => {
          props.setPage(props.text);
          alertM(props.text);
          toggleX(props.text);
        }}
      >
        {props.text}
      </Button>
  );
};

export default Navbar;
export { NavbarRow };
