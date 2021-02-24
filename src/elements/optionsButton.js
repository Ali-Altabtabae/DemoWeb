import React from "react";
import styled from "styled-components";

const BookButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;
const OptionButton = () => {
  return (
    <>
      <div>
        <select>
          <option value="none" selected disabled hidden>
            Select an Option{" "}
          </option>
          <option value="t-7-8" id="opt1">
            7:00 pm - 8:00 pm
          </option>
          <option value="t-8-9" id="opt2">
            8:00 pm - 9:00 pm
          </option>
          <option value="t-9-10" id="opt3">
            9:00 pm - 10:00 pm
          </option>
          <option value="t-10-11" id="opt4">
            10:00 pm - 11:00 pm
          </option>
          <option value="t-11-12" id="opt5">
            11:00 pm - 12:00 am
          </option>
          <option value="t-12-1" id="opt6">
            12:00 am - 1:00 am
          </option>
        </select>
      </div>
      <p>
        <BookButton>Book</BookButton>
      </p>
    </>
  );
};

export default OptionButton;
