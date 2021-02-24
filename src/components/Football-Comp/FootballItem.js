import React from "react";
import styled from "styled-components";
import pic from "../../pics/football-court.jpg";
import OptionButton from "../../elements/optionsButton";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  float: left;
  width: 25%;
  padding: 0 10px;
  margin-left: 5%;
  text-align: center;
  color: purple;
  filter: ${(props) => props.theme.pink};
`;

const Image = styled.img `
height: 100%; 
width: 100%;
;`

const FootballItem = (props) => {
  const football = props.football;
  return (
    <Card>
      <h2>{football.name}</h2>
      <Image src={pic} alt="pic"/>
      <p>${football.price}/Hr</p>
      <OptionButton/>
    </Card>
  );
};

export default FootballItem;
