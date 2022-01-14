import React from "react";
import styled from "styled-components";
import BackgroundUpgrade from "../assets/background-button-upgrade.png";
const Wrapper = styled.div`
    background-image: url(${BackgroundUpgrade});
    background-repeat:no-repeat ;
    width: fit-content;
    padding: 52px;
    background-size: 100% 100%;
    padding-top: 35px;
`;
const Text = styled.div`
    /* font-family: UTM Kabel KT; */
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
    color: #FFC739;
`;

const ButtonUpgrade = () =>{
    return (
        <>
        <Wrapper>
            <Text>Upgrade</Text>
        </Wrapper>
        </>
    )
}
export default ButtonUpgrade;

