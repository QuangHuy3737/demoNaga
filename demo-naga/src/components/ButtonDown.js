import React from "react";
import styled from "styled-components";
import down from "../assets/down.png";
const ButtonWrapper = styled.div`
  background: linear-gradient(
    97.84deg,
    #06032e -5.65%,
    rgba(76, 69, 159, 0.37) 101.93%
  );
  border-radius: 8px;
  padding: 7px 10px;
  display:flex;
  justify-content: space-between;
  width: 140px;
  align-items:center;
`;
const Text = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  color: #ffffff;
`;
const ButtonDown = () => {
  return (
    <>
      <ButtonWrapper>
        <Text>Time</Text>
        <img width="9px" height="5px" src={down} />
      </ButtonWrapper>
    </>
  );
};
export default ButtonDown;
