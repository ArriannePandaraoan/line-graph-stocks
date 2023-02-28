import React, { useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import GraphByDay from "./GraphByDay";
import MetaPic from "../assets/images/Meta.png";
import { Button } from "antd";
import GraphByMonth from "./GraphByMonth";

const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  margin-top: 6%;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-left: 20px;
    padding-right: 20px;
    margin-top: 20%;
    justify-content: center;
  }
`;

const StyledImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  margin-top: 6%;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    padding-right: 20px;
    margin-top: 20%;
    justify-content: center;
  }
`;

const StyledImg = styled.img`
  width: 10rem;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

const StyledGraphContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
`;

const StyledBtnContainer = styled.div`
  margin-left: 5px;
  // padding-right: 20px;
  @media (max-width: 600px) {
    margin-left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5%;
  }
`;

const StyledNoteContainer = styled.div`
  font-size: 10px;
  color: red;
  @media (max-width: 600px) {
    margin-left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5%;
    width: 95%;
    text-align: center;
  }
`;

const StyledDisplayNone = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  display: none;
`;

function HomePage() {
  const [daily, setDaily] = useState();
  const [monthly, setMonthly] = useState();

  function dailyGraph() {
    setDaily(<GraphByDay />);
    setMonthly(<StyledDisplayNone />);
  }

  function monthlyGraph() {
    setMonthly(<GraphByMonth />);
    setDaily(<StyledDisplayNone />);
  }

  return (
    <>
      <StyledImgContainer>
        <StyledImg src={MetaPic} />
      </StyledImgContainer>

      {dailyGraph ? (
        <StyledGraphContainer>{daily}</StyledGraphContainer>
      ) : (
        <StyledGraphContainer>{monthly}</StyledGraphContainer>
      )}

      {monthlyGraph ? (
        <StyledGraphContainer>{monthly}</StyledGraphContainer>
      ) : (
        <StyledGraphContainer>{daily}</StyledGraphContainer>
      )}

      <StyledContainer>
        <StyledBtnContainer>
          Get historical data for Meta stock price:
        </StyledBtnContainer>
        <StyledBtnContainer>
          {/* <span style={{ marginLeft: "0.5%", marginRight: "4%" }}> */}
          <Button
            type="primary"
            style={{ marginRight: "5px" }}
            onClick={dailyGraph}
          >
            Daily
          </Button>
          <Button onClick={monthlyGraph}>Monthly</Button>
          {/* </span> */}
        </StyledBtnContainer>
      </StyledContainer>
      <StyledContainer>
        <StyledNoteContainer>
          Note: Coverage from January 2022 to October 2022 in Highest price
          throughout the day only
        </StyledNoteContainer>
      </StyledContainer>
    </>
  );
}

export default HomePage;
